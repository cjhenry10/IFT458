const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    //     required: [true, 'A loan must have an id'],
    //     unique: true,
    // },
    customerName: {
        type: String,
        required: [true, 'Loan must have customer name'],
        unique: false,
        trim: true,
        maxLength: [50, 'Name must be less than or equal to 50 characters'],
        minLength: [5, 'Name must be greater than or equal to 5 characters'],
    },
    phoneNumber: {
        type: Number,
        required: [true, 'A loan must have a phone number'],
        unique: false,
        default: 0,
        minLength: [9, 'Phone number must be 10 digits'],
        maxLength: [11, 'Phone number must be 10 digits']
    },
    address: {
        type: String,
        required: [true, 'Loan must have address'],
        unique: false,
        trim: true,
        maxLength: [50, 'Address must be less than or equal to 50 characters'],
        minLength: [5, 'Address must be greater than or equal to 5 characters'],
    },
    loanAmount: {
        type: Number,
        required: true,
        default: 0
    },
    loanTermYears: {
        type: Number,
        required: true,
        default: 100
    },
    interest: {
        type: Number,
        required: true,
        default: 100,
    },
    loanType: {
        type: String,
        required: [true, 'Loan must have a type'],
        unique: false,
        trim: true,
        maxLength: [50, 'Loan type must be less than or equal to 50 characters'],
        minLength: [1, 'Loan type must be greater than or equal to one character']
    },
    description: {
        type: String,
        required: [true, 'Loan must have a description'],
        unique: false,
        trim: true,
        maxLength: [50, 'Loan description must be less than or equal to 50 characters'],
        minLength: [5, 'Loan description must be greater than or equal to 5 characters'],
    },
})

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;