const express = require("express");
const router = express.Router();
const { Review } = require("../mongoose/model");

// create : 리뷰 생성
router.post("/create", async (req, res) => {
  const { title, id, content, releaseDate } = req.body;

  const newReview = await Review({
    title,
    author: id,
    releaseDate,
    content,
  }).save();

  res.send(newReview._id ? true : false);
});

module.exports = router;
