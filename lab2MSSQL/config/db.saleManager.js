const sql = require('mssql');
const dbConnection = require('./db.config');
// console.log(dbConnection);
async function getSalesProducts() {
  console.log(' Connecting to SQL....... Cloud Server');
  let dbContext = await sql.connect(dbConnection);
  console.log('The Databse connection was Successful');
  console.log('Getting data');
  let results = await dbContext.request().query(`
SELECT TOP(20)
productId,
name,
productNumber,
color,
listPrice
FROM
salesLT.Product
`);
  console.log(`Returned SQL results`);
  return results;
}

async function getSaleById(id) {
  console.log(' Connecting to SQL....... Cloud Server');
  let dbContext = await sql.connect(dbConnection);
  console.log('The Databse connection was Successful');
  console.log('Getting data');
  console.log(id);

  let results = await dbContext.request().input('inputId', sql.VarChar, id)
    .query(`
SELECT
productId,
name,
productNumber,
color
listPrice
FROM
salesLT.Product
WHERE
productId = @inputId
`);
  console.log(`Returned SQL results`);
  return results;
}

async function createNewSale(item) {
  console.log(' Connecting to SQL....... Cloud Server');
  let dbContext = await sql.connect(dbConnection);
  console.log('The Databse connection was Successful');
  console.log('Getting data');
  let results = await dbContext.request()
  .input('inputId', sql.VarChar, item.productId)
  .input('inputName', sql.VarChar, item.name)
  .input('inputNumber', sql.VarChar, item.productNumber)
  .input('inputColor', sql.VarChar, item.color)
  .input('inputPrice', sql.VarChar, item.listPrice)
  .query(`
        INSERT INTO
        salesLT.Product (productId, name, productNumber, color, listPrice)
        VALUES
        (@inputId, @inputName, @inputNumber, @inputColor, @inputPrice)
`);
  console.log(`Item added to server`);
  return results;
}
//Export
module.exports = {
  getSalesProducts: getSalesProducts,
  getSaleById: getSaleById,
  createNewSale: createNewSale
};
