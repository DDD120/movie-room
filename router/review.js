const express = require("express");
const router = express.Router();
const { Review, User } = require("../mongoose/model");

// Create : 리뷰 생성
router.post("/", async (req, res) => {
  const { userId, movieId, content, rating } = req.body;

  const newReview = await Review({
    movieId,
    userId,
    rating,
    content,
  }).save();

  res.send(
    newReview._id
      ? {
          type: "SUCCESS_CREATE_REVIEW",
          msg: "리뷰 등록에 성공하였습니다.",
          review: newReview,
        }
      : {
          type: "FAIL_CREATE_REVIEW",
          msg: "리뷰 등록에 실패하였습니다.",
        }
  );
});

// Read : 유저 리뷰 목록 가져오기
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const getReviewList = await Review.find({ userId: id });

  console.log(getReviewList);

  res.send(getReviewList);
});

// Update : 리뷰 수정
router.patch("/", async (req, res) => {
  const { userId, content, rating } = req.body;
  const updateReview = await Review.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $set: {
        content,
        rating,
      },
    },
    {
      new: true,
    }
  );
  res.send(updateReview);
});

//  Delete : 리뷰 삭제
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteReview = await Review.deleteOne({
    _id: id,
  });

  res.send(deleteReview);
});

module.exports = router;
