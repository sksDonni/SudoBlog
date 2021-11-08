const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false
    },
    caption: {
      type: String,
      required: true,
    },
    subgroupId: {
      type: Schema.Types.ObjectId,
      ref: "subgroup",
    },
    tags: {
      type: Schema.Types.ObjectId,
      ref: "tag",
    },
    comments: [{
          type: Schema.Types.ObjectId,
          ref: "comment",
        }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
