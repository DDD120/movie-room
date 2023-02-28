import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mailSender = async (email, certificationNumber) => {
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
          <div style="padding: 12px 0;">
            <span style="font-size: 24px; font-weight; bold;">${certificationNumber}</span>
          </div>
        </body>
      `,
    });

    return info.accepted;
  } catch (e) {
    throw new Error("메일 전송에 실패하였습니다.", console.error(e));
  }
};
