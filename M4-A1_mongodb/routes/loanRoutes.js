const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllLoans)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoan)
  .patch(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;