const express = require("express");
const cors = require("cors");
const { user } = require("./router");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router 추가
app.use(user);

// 상태 확인
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
