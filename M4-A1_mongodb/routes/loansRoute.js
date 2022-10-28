const express = require('express');
const loansController = require('../controllers/loansController');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .get(loansController.getAllLoans)
  .post(userController.loginRequired, loansController.createLoan);

router
  .route('/:id')
  .get(loansController.getLoan)
  .patch(loansController.updateLoan)
  .delete(loansController.deleteLoan);

router
  .route('/auth/register')
  .post(userController.register);

router
  .route('/auth/sign_in')
  .post(userController.sign_in);

module.exports = router;
