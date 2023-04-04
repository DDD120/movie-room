import mongoose from "mongoose";
import crypto from "crypto";

const User = new mongoose.Schema({
  nickname: { type: String, required: true },
  thumbnail: {
    type: String,
    default: "",
  },
  social: {
    platformUserId: { type: String },
    platform: { type: String },
  },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String },
  salt: { type: String },
});

// password 가상 선택자
User.virtual("password").set(function (password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptoPassword(password);
});

// salt 생성 함수
User.method("makeSalt", function () {
  return String(Math.round(new Date().valueOf() * Math.random()));
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

export default User;
