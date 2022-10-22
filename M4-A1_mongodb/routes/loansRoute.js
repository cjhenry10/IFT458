const express = require('express');
const loansController = require('../controllers/loansController');
const router = express.Router();

router
  .route('/')
  .get(loansController.getAllLoans)
  .post(loansController.createLoan);

router
  .route('/:id')
  .get(loansController.getLoan)
  .patch(loansController.updateLoan)
  .delete(loansController.deleteLoan);

module.exports = router;