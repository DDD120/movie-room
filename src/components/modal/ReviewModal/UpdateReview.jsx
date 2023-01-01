import Modal from "../Modal";
import Button from "components/common/Button";
import styled from "@emotion/styled";
import StarRating from "./StarRating";
import { useUpdateReviewMutation } from "apis/server-api";
import WriteForm from "./WriteForm";

import { useEffect, useState } from "react";

const Base = styled.form`
  width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const UpdateReview = ({ review, movie, closeHandler }) => {
  const [reviewContent, setReviewContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);
  const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();
  const releaseYear = movie.release_date?.slice(0, 4);

  const handleWirteReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewContent.trim()) {
      await updateReview({
        id: review._id,
        content: reviewContent,
        rating,
      });
    }
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleReviewContentChange = (e) => {
    const reviewText = e.target.value;
    setReviewContent(reviewText);
  };

  useEffect(() => {
    isSuccess && closeHandler();
  }, [isSuccess, closeHandler]);

  return (
    <Modal closeHandler={closeHandler} backdropTouchClose={false}>
      <Base onSubmit={handleWirteReviewSubmit}>
        <Title>
          {movie.title} <span>({releaseYear})</span>
        </Title>
        <StarRating
          handleRatingClick={handleRatingClick}
          currentRating={rating}
        />
        <WriteForm
          onReviewContentChange={handleReviewContentChange}
          value={reviewContent}
          contentLength={reviewContent.length}
          disabled={isLoading}
        />
        <Button disabled={isLoading}>수정</Button>
      </Base>
    </Modal>
  );
};

export default UpdateReview;
