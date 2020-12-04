const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = Schema({
  productID: {
    required: true,
    type: String,
  },

  name: String,
  brand: String,
  detail: {
    processor: String,
    os: String,
    graphics: [String],
    display: String,
    memory: String,
    hardDrive: String,
    color: String,
    weight: Number,
    battery: String,
    ports: String,
  },
  price: Number,
  status: String,
  discount: Number,
  images: [String],
  warranty: String,

  reviews: {
    comments: {
      userID: Number,
      content: String,
      createdTime: Date,
      children: [],
    },
    star: Number,
  },
  description: {
    title: String,
    content: String,
  },
});

module.exports = mongoose.model('Product', Product);
