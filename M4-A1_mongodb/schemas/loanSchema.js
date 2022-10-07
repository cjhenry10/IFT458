// import mongoose library
import mongoose from 'mongoose';
// get Schema from the mongoose library
const { Schema } = mongoose;

// create a schema that will act as the structure of our loan data
const loanSchema = new Schema({
  id: Number,
  customerName: String,
  phoneNumber: Number,
  address: String,
  loanAmount: Number,
  interest: Number,
  loanTermYears: Number,
  loanType: String,
  description: String,
  createdDate: { type: Date, default: new Date() },
  insertedDate: { type: Date, default: new Date() },
});

// schema will be used to query the MongoDB database in next assignment
