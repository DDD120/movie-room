const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Review = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    releaseDate: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

Review.plugin(AutoIncrement, { inc_field: "key" });

module.exports = Review;
