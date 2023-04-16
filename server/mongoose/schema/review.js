import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Review = new mongoose.Schema(
  {
    movieId: { type: Number, required: true },
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 0.5, max: 5, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default Review;
