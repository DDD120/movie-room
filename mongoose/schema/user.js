const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  platformUserId: { type: String },
  platform: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  profileImageURL: { type: String },
  verified: { type: Boolean, required: true },
  review: { type: Schema.Types.ObjectId, ref: "Review" },
});

module.exports = User;
