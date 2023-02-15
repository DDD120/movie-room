import cookieParser from "cookie-parser";
const express = require("express");
const cors = require("cors");
const { userRouter, reviewRouter } = require("./router");
const app = express();
const path = require("path");
const PORT = 4000;

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

// router 추가
app.use("/user", userRouter);
app.use("/review", reviewRouter);

// 상태 확인
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
