const express = require("express");
const { User } = require("../mongoose/model");
const nodemailer = require("nodemailer");
const multer = require("multer");
const router = express.Router();
require("dotenv").config();

// signin: 로그인
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.find({ email: email });

  if (!existingUser._id) {
    return res.send({
      error: true,
      msg: "이메일 혹은 비밀번호가 일치하지 않습니다.",
    });
  }

  const correctPassword = await existingUser.authenticate(password);
  if (!correctPassword) {
    return res.send({
      error: true,
      msg: "이메일 혹은 비밀번호가 일치하지 않습니다.",
    });
  }

  res.redirect("/");
});

//signup: 회원 가입
let certificationNumber;

const mailSender = async (email, certificationNumber) => {
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

  let info = await transporter.sendMail({
    from: `"MOVIE ROOM" <${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: "[MOVIE ROOM] 회원가입 인증번호 발송",
    html: `
      <body>
        <h1>MOVIE ROOM에서 인증번호를 발송해 드립니다.</h1>
        </br>
        <div style="display: flex; padding: 12px 20px; background-color: #FEE2CA; border-radius: 12px;">
          <span style="font-size: 24px; font-weight; bold;">${certificationNumber}</span>
        </div>
      </body>
    `,
  });

  return info.accepted;
};

router.post("/email", async (req, res) => {
  const { email } = req.body;

  const existingUser = await User.find({ email: email });
  if (existingUser._id) {
    res.send({
      error: true,
      msg: "이미 가입된 계정입니다.",
    });
  }

  // 랜덤 5숫자 생성
  certificationNumber = Math.floor(Math.random() * (99999 - 10000) + 10000);

  const mailSendComplete = await mailSender(email, certificationNumber);
  setTimeout(() => {
    certificationNumber = undefined;
  }, 180000);

  console.log(certificationNumber, mailSendComplete);

  if (mailSendComplete) {
    res.send({
      msg: "해당 이메일로 인증번호가 전송되었습니다.",
    });
  } else {
    res.send({
      error: true,
      msg: "해당 이메일로 인증번호 전송이 실패되었습니다.",
    });
  }
});

router.post("/signup", async (req, res) => {
  const { inputNumber, email, password, nickname } = req.body;

  if (Number(inputNumber) === certificationNumber) {
    const newUser = await User({
      email,
      password,
      profile: {
        nickname,
        thumbnail,
      },
      verified: true,
    }).save();

    res.send(newUser._id ? true : false);
  } else {
    res.send({
      error: true,
      msg: "인증번호를 잘못 입력하였습니다.",
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

router.patch("/update/profile", upload.single("image"), async (req, res) => {
  const { id, nickname } = req.body;
  const thumbnail = req.file.path;
  const updateNickname = await User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      profile: {
        nickname,
        thumbnail,
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
