// Connor Henry
// 11/29/2022
// define which methods should execute at which address 
const express = require('express');
const loansController = require('../controllers/loansController');
const userController = require('../controllers/userController');
const router = express.Router();

// define which methods should execute at which address 

router
  .route('/all')
  .get(userController.loginRequired, loansController.getAllLoans);
router
  .route('/create')
  .get(userController.loginRequired, loansController.getCreateLoanForm)
  .post(userController.loginRequired, loansController.createLoan);
router
  .route('/:loanNumber')
  .get(userController.loginRequired, loansController.getLoan);

module.exports = router;