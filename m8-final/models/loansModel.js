// Connor Henry
// 11/29/2022
// defines the structure of the loan document in mongoDB
const mongoose = require('mongoose');
const loansSchema = new mongoose.Schema({
    loanNumber: {
      type: Number,
      required: true,
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
    interestRate: {
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
    loanStartDate: {
      type: Date,
      default: Date.now,
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
})

const Loans = mongoose.model('loans', loansSchema);

module.exports = Loans;