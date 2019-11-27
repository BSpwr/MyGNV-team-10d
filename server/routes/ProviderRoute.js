const providerController = require('../controllers/ProviderController');
const express = require('express');
const router = new express.Router();

router
  .route('/')
  .get(providerController.list)
  .post(providerController.create);

router
  .route('/:providerId')
  .get(providerController.read)
  .put(providerController.update)
  .delete(providerController.delete);

router
  .route('/subCategory/:categoryId')
  .get(providerController.listSubCategory);

router.param('providerId', providerController.providerById);
router.param('categoryId', providerController.getSubCategory);

module.exports = router;
