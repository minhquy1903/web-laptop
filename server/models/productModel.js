const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = Schema({
  sku: {
    required: true,
    type: String,
  },

  name: String,
  brand: {
    name: String,
    subBrand: String,
  },
  detail: {
    processor: String,
    os: String,
    graphics: [String],
    display: String,
    memory: String,
    hardDrive: String,
    color: String,
    weight: String,
    battery: String,
    ports: String,
  },
  price: Number,
  status: String,
  discount: Number,
  images: [String],
  warranty: String,

  comments: {
    commentID: mongoose.Types.ObjectId(),
    username: {
      required: true,
      type: String,
    },
    name: String,
    content: String,
    createdTime: Date,
    parentCommentID: String,
    type: Array,
  },

  star: Number,

  description: {
    title: String,
    content: String,
  },
});

module.exports = mongoose.model('Product', Product);
