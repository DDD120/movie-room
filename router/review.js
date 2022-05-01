const express = require("express");
const router = express.Router();
const { Review, User } = require("../mongoose/model");

// create : 리뷰 생성
router.post("/create", async (req, res) => {
  const { title, id, content, releaseDate } = req.body;

  const newReview = await Review({
    title,
    author: id,
    releaseDate,
    content,
  }).save();

  const userReviewsUpdate = await User.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: newReview } }
  );

  res.send(newReview._id && userReviewsUpdate ? true : false);
});

// Read : 유저 리뷰 목록 가져오기
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const getReviewList = await User.findOne({ _id: id }).populate("reviews");
  res.send(getReviewList.reviews);
});

module.exports = router;
