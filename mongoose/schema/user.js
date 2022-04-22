const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const User = new mongoose.Schema({
  profile: {
    nickname: { type: String, required: true, unique: true },
    thumbnail: {
      type: String,
      default: "/static/images/default-thumbnail.png",
    },
  },
  social: {
    platformUserId: { type: String },
    platform: { type: String },
  },
  email: { type: String, unique: true },
  hashedPassword: { type: String },
  salt: { type: String },
  verified: { type: Boolean, required: true, default: false },
  review: { type: Schema.Types.ObjectId, ref: "Review" },
});

// password 가상 선택자
User.virtual("password").set(function (password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptoPassword(password);
});

// salt 생성 함수
User.method("makeSalt", function () {
  return Math.round(new Date().valueOf() * Math.random()) + "";
});

// 해시된 비밀번호 생성 함수
User.method("encryptoPassword", function (plainPassword) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(plainPassword)
    .digest("hex");
});

// 사용자 인증 함수
User.method("authenticate", function (plainPassword) {
  const inputPassword = this.encryptoPassword(plainPassword);
  return inputPassword === this.hashedPassword;
});

module.exports = User;
