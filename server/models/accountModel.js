const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  address: String,
  phone: String,
  email: String,
  type: Number,
});

module.exports = mongoose.model('accounts', Account);
