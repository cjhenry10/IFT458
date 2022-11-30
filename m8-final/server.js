// Connor Henry
// 11/29/2022
// connects to mongoDB and starts server on port
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');


const app = require('./app');

// connect to mongoDB using environment variables

const password = encodeURIComponent(process.env.DB_PASSWORD);

const DB = process.env.DATABASE.replace(
  '<password>',
  password
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
    //useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

  // start server on port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


