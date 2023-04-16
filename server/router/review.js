import express from "express";
import reviewService from "../services/review.service.js";
const router = express.Router();

router.post("/", reviewService.createReview);

router.get("/user/:id", reviewService.getReviewsByUser);

router.get("/movie/:id", reviewService.getReviewsByMovie);

router.patch("/", reviewService.updateReivew);

router.delete("/:id", reviewService.deleteReview);

export default router;
