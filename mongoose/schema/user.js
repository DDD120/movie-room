const mongoose = require("mongoose");
const crypto = require("crypto");
const util = require("util");
const Schema = mongoose.Schema;

const User = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  platformUserId: { type: String },
  platform: { type: String },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  salt: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  profileImageURL: { type: String },
  verified: { type: Boolean, required: true },
  review: { type: Schema.Types.ObjectId, ref: "Review" },
});

// password 가상 선택자
User.virtual("password").set((password) => {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.encryptoPassword(password);
});

// salt 생성 함수
User.method("makeSalt", async () => {
  const randomBytesPromise = util.promisify(crypto.randomBytes);
  const buffer = await randomBytesPromise(64);
  return buffer.toString("base64");
});

// 해시된 비밀번호 생성 함수
User.method("encryptoPassword", async (plainPassword) => {
  const pbkdf2Promise = util.promisify(crypto.pbkdf2);
  const key = await pbkdf2Promise(
    plainPassword,
    this.salt,
    10411,
    64,
    "sha256"
  );
  return key.toString("base64");
});

// 사용자 인증 함수
User.method("authenticate", (plainPassword) => {
  const inputPassword = this.encryptoPassword(plainPassword);
  return inputPassword === this.hashedPassword;
});

module.exports = User;
