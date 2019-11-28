const userController = require('../controllers/UserController');
const express = require('express');
const router = new express.Router();

router.route('/login').post(userController.login);

router.route('/logout').post(userController.logout);

router.route('/isLoggedIn').post(userController.isLoggedIn);

router
  .route('/register')
  .post(userController.isAuthenticated, userController.register);

module.exports = router;
