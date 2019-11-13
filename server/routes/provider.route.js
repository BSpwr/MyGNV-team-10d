const provider = require('../controllers/provider.controller.js');
const express = require('express');
const router = new express.Router();

router
  .route('/')
  .get(provider.list)
  .post(provider.create);

router
  .route('/:providerId')
  .get(provider.read)
  .put(provider.update)
  .delete(provider.delete);

router.param('providerId', provider.providerByID);

module.exports = router;
