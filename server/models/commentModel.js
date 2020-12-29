const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  commentID: mongoose.Schema.Types.ObjectId(),
  username: {
    required: true,
    type: String,
  },
  name: String,
  content: String,
  createdTime: Date,
  parentCommentID: String,
  type: Array,
});
