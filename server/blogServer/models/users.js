const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./posts");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "post"}],
    likedPosts: [{ type: Schema.Types.ObjectId, ref: "post" }],
    likedComments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("user", userSchema);
