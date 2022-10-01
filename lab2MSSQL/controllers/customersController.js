const db = require('../config/db.customerManager');
exports.getAllCustomers = function (req, res) {
  const customers = db.getCustomers().then((results) => {
    console.log(results);
    res.status(200).json({
      status: 'successfull',
      data: results.recordsets[0],
    }); // send all the data
  });
};
exports.getCustomerById = function (req, res) {
  const { id } = req.params; // get id
  const customer = db.getCustomer(id).then((results) => {
    console.log(results)
    res.status(200).json({
      status: 'success',
      data: results.recordsets[0],
    });
  })
};
