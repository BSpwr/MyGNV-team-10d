const Provider = require('../models/provider.model.js');

/* Create a provider */
exports.create = function(req, res) {
  const provider = new Provider(req.body);

  // TODO: ADD FIELDS

  /* Then save the provider */
  provider.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(provider);
      console.log(provider);
    }
  });
};

/* Show the current provider */
exports.read = function(req, res) {
  /* send back the provider as json from the request */
  res.json(req.provider);
};

/* Update a provider */
exports.update = function(req, res) {
  const provider = req.provider;

  // TODO: ADD FIELDS

  /* Save the listing */
  provider.save((err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(provider);
      console.log(provider);
    }
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  const provider = req.provider;
  Provider.deleteOne(provider, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else res.status(200).end();
  });
};

/* Retrieve all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Provider.find({})
    .sort({ code: 1 })
    .exec((err, providers) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(providers);
      }
    });
};

/* Middleware to get a provider from database by ID */
exports.providerByID = function(req, res, next, id) {
  Provider.findById(id).exec((err, provider) => {
    if (err) {
      res.status(400).send(err);
    } else {
      req.provider = provider;
      next();
    }
  });
};
