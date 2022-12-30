const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Review = new mongoose.Schema(
  {
    movieId: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 0.5, max: 5, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

Review.plugin(AutoIncrement, { inc_field: "key" });

module.exports = Review;
