const providerController = require('../controllers/ProviderController');
const userController = require('../controllers/UserController');
const express = require('express');
const router = new express.Router();

router
  .route('/')
  .get(providerController.list)
  .post(userController.isAuthenticated, providerController.create);

router
  .route('/:providerId')
  .get(providerController.read)
  .put(userController.isAuthenticated, providerController.update)
  .delete(userController.isAuthenticated, providerController.delete);

router
  .route('/subCategory/:categoryId')
  .get(providerController.listSubCategory);

router.param('providerId', providerController.providerById);
router.param('categoryId', providerController.getSubCategory);

module.exports = router;
