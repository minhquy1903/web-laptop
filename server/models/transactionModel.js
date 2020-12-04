const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Transactions = Schema({
  transactionID: {
    type: String,
    required: true,
  },
  customer: {
    username: String,
    address: String,
    phone: String,
    name: String,
  },
  products: [],
  total: Number,
  date: {
    orderDay: Date,
    deliveryDay: Date,
  },
  status: Boolean,
});

module.exports = mongoose.model('Transactions', Transactions);
