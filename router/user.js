const express = require("express");
const User = require("../mongoose/schema/user");
const router = express.Router();

// signin
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

module.exports = router;
