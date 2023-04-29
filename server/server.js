import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { userRouter, reviewRouter } from "./router/index.js";
import path from "path";

const app = express();
const __dirname = path.resolve();
const PORT = 8080;

const origin =
  process.env.NODE_ENV.trim() === "dev"
    ? "http://localhost:3000"
    : "https://ddd120.github.io";

app.use(cookieParser());
app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/image", express.static("./uploads"));

app.use("/user", userRouter);
app.use("/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log("Server is running!");
});
