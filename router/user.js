const express = require("express");
const { User } = require("../mongoose/model");
const nodemailer = require("nodemailer");
const multer = require("multer");
import { me } from "../lib/me";
import { generateToken, setTokenCookie, validateToken } from "../lib/token";
const router = express.Router();
require("dotenv").config();

// signin: 로그인
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginUser = await User.findOne({ email });
    if (!loginUser._id) {
      return res.send({
        type: "FAIL_LOGIN",
        msg: "이메일 혹은 비밀번호가 일치하지 않습니다.",
      });
    }

    const correctPassword = await loginUser.authenticate(password);
    if (!correctPassword) {
      return res.send({
        type: "FAIL_LOGIN",
        msg: "이메일 혹은 비밀번호가 일치하지 않습니다.",
      });
    }

    const user = me(loginUser);
    const token = await generateToken(user);
    setTokenCookie(res, token);

    res.send({
      type: "SUCCESS_LOGIN",
      msg: `반가워요 ${user.profile.nickname}님 👋`,
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

// 사용자 토큰 체크
router.get("/token", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.send({
      type: "FAIL_CHECK_TOKEN",
      msg: "토큰 검증에 실패햐였습니다.",
    });
  }
  const user = await validateToken(token);
  res.send({
    type: "SUCCESS_CHECK_TOKEN",
    msg: "토큰 검증에 성공하였습니다.",
    user,
  });
});

//signup: 회원 가입
let certificationNumber;

const mailSender = async (email, certificationNumber) => {
  console.log(email, certificationNumber);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"MOVIE ROOM" <${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "[MOVIE ROOM] 회원가입 인증번호 발송",
      html: `
        <body>
          <h1>[MOVIE ROOM]</h1>
          </br>
          <p>MOVIE ROOM에서 인증번호를 발송해 드립니다.</p>
          <div style="display: flex; padding: 12px 20px; background-color: #FEE2CA; border-radius: 12px;">
            <span style="font-size: 24px; font-weight; bold;">${certificationNumber}</span>
          </div>
        </body>
      `,
    });
    console.log(info);
    return info.accepted;
  } catch (error) {
    console.error(error);
  }
};

router.post("/email", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    console.log(email, existingUser);
    if (existingUser) {
      return res.send({
        type: "EXISTION_USER",
        msg: "이미 가입된 계정이 있습니다.",
      });
    }

    // 랜덤 5숫자 생성
    certificationNumber = Math.floor(Math.random() * (99999 - 10000) + 10000);

    const mailSendComplete = await mailSender(email, certificationNumber);
    setTimeout(() => {
      certificationNumber = null;
    }, 180000);

    console.log(certificationNumber, mailSendComplete);

    if (mailSendComplete) {
      return res.send({
        type: "SUCCESS_SEND_EMAIL",
        msg: `회원가입을 위한 인증 메일이 전송되었습니다.`,
      });
    } else {
      return res.send({
        type: "FAIL_SEND_EMAIL",
        msg: `회원가입을 위한 인증 메일이 전송 실패되었습니다.`,
      });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post("/signup", async (req, res) => {
  const { inputNumber, email, password } = req.body;

  if (Number(inputNumber) === certificationNumber) {
    try {
      const newUser = await User({
        email,
        password,
        profile: {
          nickname: email,
        },
      }).save();

      return res.send(
        newUser._id
          ? res.send({
              type: "SUCCESS_SIGNUP",
              msg: "회원가입이 완료되었습니다.",
              user: {
                email: newUser.email,
                profile: {
                  nickname: newUser.email,
                  thumbnail: newUser.profilethumbnail,
                },
                reviews: newUser.reviews,
                id: newUser._id,
              },
            })
          : res.send({
              type: "FAIL_SIGNUP",
              msg: "회원가입 처리 도중 오류가 발생하였습니다.",
            })
      );
    } catch (err) {
      console.error(err);
      return res.send({
        type: "FAIL_SIGNUP",
        msg: "회원가입 처리 도중 오류가 발생하였습니다.",
      });
    }
  } else {
    return res.send({
      type: "WRONG_NUMBER",
      msg: "인증번호를 잘못 입력하셨습니다.",
    });
  }
});

// edit profile : 프로필 수정
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.patch("/profile", upload.single("image"), async (req, res) => {
  const { id, nickname } = req.body;
  const thumbnail = req.file.path;
  const updateNickname = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        profile: {
          nickname,
          thumbnail,
        },
      },
    },
    {
      new: true,
    }
  );
  res.send(updateNickname);
});

// Sign out : 회원 탈퇴
router.delete("/signout", async (req, res) => {
  const { id } = req.body;

  const deleteUser = await User.deleteOne({
    _id: id,
  });

  res.send(deleteUser);
});

module.exports = router;
