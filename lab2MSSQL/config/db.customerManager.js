const sql = require('mssql');
const dbConnection = require('./db.config');
// console.log(dbConnection);
async function getCustomers() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request().query(`
        SELECT TOP(20)
        CustomerID,
        FirstName,
        MiddleName,
        LastName,
        EmailAddress
        FROM
        salesLT.Customer
  `);
    console.log(`Returned SQL results`);
    return results;
}

async function getCustomer(id) {
    console.log(' Connecting to SQL....... Cloud Server');
  let dbContext = await sql.connect(dbConnection);
  console.log('The Databse connection was Successful');
  console.log('Getting data');
  console.log(id);

  let results = await dbContext.request().input('inputId', sql.VarChar, id)
    .query(`
        SELECT
        CustomerID,
        FirstName,
        MiddleName,
        LastName,
        EmailAddress
        FROM
        salesLT.Customer
        WHERE
        CustomerID = @inputId
`);
  console.log(`Returned SQL results`);
  return results;
}

module.exports = {
    getCustomers: getCustomers,
    getCustomer: getCustomer,
}