const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("./users");

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    post:{
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    userName: {
      type: Schema.Types.ObjectId,
      ref: 'user'
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

exports.module = mongoose.model("comment", commentSchema);
