import { isValidObjectId } from "mongoose";
import model from "../mongoose/model.js";
const { Review } = model;

const reviewService = {
  createReview: async (req, res) => {
    const { userId, movieId, title, content, rating } = req.body;

    try {
      const written = await Review.findOne()
        .where("user")
        .equals(userId)
        .where("movieId")
        .equals(movieId);

      if (written) {
        return res.status(409).send({
          message: "이미 리뷰를 작성하였습니다.",
        });
      }

      const review = await Review({
        movieId,
        user: userId,
        title,
        rating,
        content,
      }).save();

      res.status(201).send({
        message: "리뷰가 등록되었습니다.",
        review,
      });
    } catch (e) {
      throw new Error("리뷰 등록에 실패하였습니다.", console.error(e));
    }
  },
  getReviewsByUser: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        message: "id가 없습니다.",
      });
    }
    if (!isValidObjectId(id)) {
      return res.status(422).send({
        message: "id의 형식이 올바르지 않습니다.",
      });
    }

    try {
      const review = await Review.find().where("user").equals(id);

      res.status(200).send({
        review,
      });
    } catch (e) {
      throw new Error("리뷰 가져오기에 실패하였습니다.", console.error(e));
    }
  },
  getReviewsByMovie: async (req, res) => {
    const { id } = req.params;
    const { limit } = req.query;

    if (!id) {
      return res.status(400).send({
        message: "id가 없습니다.",
      });
    }

    try {
      const review = await Review.find()
        .where("movieId")
        .equals(id)
        .populate("user")
        .limit(limit);

      res.status(200).send({
        review,
      });
    } catch (e) {
      throw new Error("리뷰 가져오기에 실패하였습니다.", console.error(e));
    }
  },
  updateReivew: async (req, res) => {
    const { id, content, rating } = req.body;

    try {
      const review = await Review.findOneAndUpdate(
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

      res.status(200).send({
        message: "리뷰가 수정되었습니다.",
        review,
      });
    } catch (e) {
      throw new Error("리뷰 수정에 실패하였습니다.", console.error(e));
    }
  },
  deleteReview: async (req, res) => {
    const { id } = req.params;

    try {
      await Review.deleteOne().where("_id").equals(id);

      res.status(200).send({
        message: "리뷰가 삭제되었습니다.",
      });
    } catch (e) {
      throw new Error("리뷰 삭제에 실패하였습니다.", console.error(e));
    }
  },
};

export default reviewService;
