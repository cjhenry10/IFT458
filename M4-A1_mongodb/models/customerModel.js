const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Customer must have first name'],
    trim: true,
  },
  middleName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Customer must have last name'],
    trim: true,
  },
  name: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'customer needs DOB'],
    unique: false,
    default: Date.now,
  },
  gender: {
    type: String,
    required: true,
    unique: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;
