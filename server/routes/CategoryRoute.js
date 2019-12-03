const categoryController = require('../controllers/CategoryController');
const userController = require('../controllers/UserController');
const express = require('express');
const router = new express.Router();

router
  .route('/')
  .get(categoryController.list)
  .post(userController.isAuthenticated, categoryController.create);

router.route('/topLevelCategory').get(categoryController.listTopLevel);

router
  .route('/subCategory/:categoryId')
  .get(categoryController.listSubCategory);

router
  .route('/:categoryId')
  .get(categoryController.read)
  .post(userController.isAuthenticated, categoryController.update)
  .delete(userController.isAuthenticated, categoryController.delete);

router.param('categoryId', categoryController.categoryById);

module.exports = router;
