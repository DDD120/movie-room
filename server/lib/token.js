import jwt from "jsonwebtoken";
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
      (err, token) => {
        if (err || !token) {
          reject(err);
          return;
        }
        resolve(token);
      }
    );
  });
};

export const validateToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};

export const setTokenCookie = (res, token) => {
  return res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60),
  });
};
