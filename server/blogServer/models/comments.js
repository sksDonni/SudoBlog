const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("./users");

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    postId:{
      type: Schema.Types.ObjectId,
      ref: 'post'
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    firstName: {
      type: String,
      required: true
    },
    lastName:{
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);
