const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Transactions = Schema({
  customer: {
    id: String,
    phone: String,
    name: String,
    address: String,
  },
  products: {
    id: String,
    name: String,
    image: String,
    sku: String,
    discount: Number,
    price: Number,
    type: Array,
  },
  total: Number,
  date: String,
  status: Boolean,
});

module.exports = mongoose.model('Transactions', Transactions);
