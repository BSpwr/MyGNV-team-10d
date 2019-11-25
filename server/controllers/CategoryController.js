const Category = require('../models/CategorySchema');

// Get all the categories
exports.list = (req, res) => {
  Category.find({})
    .populate('subcategory_of')
    .exec((err, categories) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(categories);
      }
    });
};

// Get the top level categories
exports.listTopLevel = (req, res) => {
  Category.find({ subcategory_of: { $size: 0 } }).exec((err, categories) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(categories);
    }
  });
};

// Get the subcategories
exports.listSubCategory = (req, res) => {
  Category.find({ 'subcategory_of.0': req.id }).exec((err, categories) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(categories);
    }
  });
};

// Get the current category
exports.read = (req, res) => {
  res.json(req.category);
};

// Middleware to get a category from database by ID
exports.categoryById = (req, res, next, id) => {
  Category.findById(id)
    .populate('subcategory_of')
    .exec((err, category) => {
      if (err) {
        res.status(400).send(err);
      } else {
        req.category = category;
        req.id = id;
        next();
      }
    });
};
