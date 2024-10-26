const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blogSchema);
