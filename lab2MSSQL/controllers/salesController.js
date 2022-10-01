const db = require('../config/db.saleManager');
exports.getAllSales = function (req, res) {
  const salesProduct = db.getSalesProducts().then((results) => {
    console.log(results);
    res.status(200).json({
      status: 'successfull',
      data: results.recordsets[0],
    }); // send all the data
  });
};
exports.getSalesByID = function (req, res) {
  const { id } = req.params; // get id
  const saleProduct = db.getSaleById(id).then((results) => {
    console.log(results)
    res.status(200).json({
      status: 'success',
      data: results.recordsets[0],
    });
  })
};

// cannot edit this database, only GET requests work

exports.createNewSales = function (req, res) {
  // must select the body to be raw->JSON in Postman
  const { body } = req; // req.body (attribute)
  const { id } = req.params; // get (attribute)
  const newSale = db.createNewSale(body).then(results => {
    res.status(200).json({
      status: 'new sale added',
    });
  })
};
exports.patchSalesById = function (req, res) {
  // must select the body to be raw->JSON in Postman
  const { body } = req; // req.body (attribute)

  const { id } = req.params; // get id (attribute)
  res.status(200).json({
    status: 'patch sales by id not implemented',
  });
};
exports.deleteSalesByID = function (req, res) {
  // must select the body to be raw->JSON in Postman
  const { body } = req; // req.body (attribute)
  const { id } = req.params; // get id
  res.status(200).json({
    status: 'delete not implemented',
  });
};
