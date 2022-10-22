const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  principal: {
    type: Number,
    required: [true, 'principal required'],
  },
  interest: {
    type: Number,
    required: [true, 'interest required'],
  },
  paymentAmount: {
    type: Number,
    default: () => this.principal + this.interest,
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

const Ledger = mongoose.model('ledgers', ledgerSchema);

module.exports = Ledger;
