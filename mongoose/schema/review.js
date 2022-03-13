const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  releaseDate: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Review;
