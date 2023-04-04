import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { userRouter, reviewRouter } from "./router";
import path from "path";

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/image", express.static("./uploads"));

app.use("/user", userRouter);
app.use("/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
