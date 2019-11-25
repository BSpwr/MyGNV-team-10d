const categoryController = require('../controllers/CategoryController');
const express = require('express');
const router = new express.Router();

router.route('/').get(categoryController.list);

router.route('/topLevelCategory').get(categoryController.listTopLevel);

router
  .route('/subCategory/:categoryId')
  .get(categoryController.listSubCategory);

router.route('/:categoryId').get(categoryController.read);

router.param('categoryId', categoryController.categoryById);

module.exports = router;
