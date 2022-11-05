const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
//new code
const mongoose = require('mongoose');

const password = encodeURIComponent(process.env.DB_PASSWORD);

const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', password);

mongoose.connect(MONGO_DATA_BASE,
  //connection recipe
  {
    useNewUrlParser: true,
    // useCreateIndex: true
  }).then(con=>{
    // console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  }).catch(err=>console.error(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
//** Code END
