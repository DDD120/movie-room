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

  if (!newReview) {
    return res.send({
      type: "FAIL_CREATE_REVIEW",
      msg: "리뷰 등록에 실패하였습니다.",
    });
  }

  return res.send({
    type: "SUCCESS_CREATE_REVIEW",
    msg: "리뷰 등록에 성공하였습니다.",
    review: newReview,
  });
});

// Read : 유저 리뷰 목록 가져오기
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const getReviewList = await Review.find({ userId: id });

  if (!getReviewList) {
    return res.send({
      type: "FAIL_GET_REVIEW",
      msg: "리뷰 가져오기에 실패하였습니다.",
    });
  }

  return res.send({
    type: "SUCCESS_GET_REVIEW",
    msg: "리뷰 등록에 성공하였습니다.",
    review: getReviewList,
  });
});

// Update : 리뷰 수정
router.patch("/", async (req, res) => {
  const { id, content, rating } = req.body;

  const updateReview = await Review.findOneAndUpdate(
    {
      _id: id,
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

  if (!updateReview) {
    return res.send({
      type: "FAIL_UPDATE_REVIEW",
      msg: "리뷰 수정에 실패하였습니다.",
    });
  }

  return res.send({
    type: "SUCCESS_UPDATE_REVIEW",
    msg: "리뷰 수정에 성공하였습니다.",
    review: updateReview,
  });
});

//  Delete : 리뷰 삭제
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteReview = await Review.deleteOne({
    _id: id,
  });

  if (!deleteReview) {
    return res.send({
      type: "FAIL_DELETE_REVIEW",
      msg: "리뷰 삭제에 실패하였습니다.",
    });
  }

  return res.send({
    type: "SUCCESS_DELETE_REVIEW",
    msg: "리뷰 삭제에 성공하였습니다.",
  });
});

module.exports = router;
