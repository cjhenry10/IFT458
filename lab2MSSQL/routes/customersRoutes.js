const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customersController');
router
  .route('/')
  .get(customerController.getAllCustomers)
//   .post(salesController.createNewSales);
router
  .route('/:id')
  .get(customerController.getCustomerById);
//   .patch(salesController.patchSalesById)
//   .delete(salesController.deleteSalesByID);
module.exports = router;