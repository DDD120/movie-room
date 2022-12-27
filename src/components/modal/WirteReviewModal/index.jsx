import Modal from "../Modal";
import Button from "components/common/Button";
import styled from "@emotion/styled";
import StarRating from "./StarRating";
import { useCreateReviewMutation } from "apis/server-api";
import WriteForm from "./WriteForm";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Base = styled.form`
  width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const WirteReviewModal = ({ movie, closeHandler }) => {
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(0);
  const [createReview, { isLoading, isSuccess }] = useCreateReviewMutation();
  const { id } = useSelector((state) => state.user.user);
  const releaseYear = movie.release_date?.slice(0, 4);

  const handleWirteReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewContent.trim()) {
      await createReview({
        userId: id,
        movieId: movie.id,
        content: reviewContent,
        rating: rating,
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
          contentLength={reviewContent.length}
          disabled={isLoading}
        />
        <Button disabled={isLoading}>등록</Button>
      </Base>
    </Modal>
  );
};

export default WirteReviewModal;
