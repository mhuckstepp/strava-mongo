const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("post", userSchema);

module.exports = Post;