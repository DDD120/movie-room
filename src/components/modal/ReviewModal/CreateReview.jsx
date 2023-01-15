import Modal from "../Modal";
import Button from "components/common/Button";
import styled from "@emotion/styled";
import StarRating from "./StarRating";
import { useCreateReviewMutation } from "apis/server-api";
import WriteForm from "./WriteForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { showToast } from "lib/toast";

const Base = styled.form`
  width: 100%;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const CreateReview = ({ movie, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      content: "",
      rating: 0,
    },
  });

  const [createReview, { data: createReviewRes, isSuccess }] =
    useCreateReviewMutation();
  const { id } = useSelector((state) => state.user.user);
  const releaseYear = movie.release_date?.slice(0, 4);

  const handleWirteReviewSubmit = ({ content, rating }) => {
    createReview({
      userId: id,
      movieId: movie.id,
      content: content,
      rating: rating,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
      showToast(createReviewRes.message);
    }
  }, [isSuccess, createReviewRes, onClose]);

  return (
    <Modal onClose={onClose}>
      <Base onSubmit={handleSubmit(handleWirteReviewSubmit)}>
        <Title>
          {movie.title} <span>({releaseYear})</span>
        </Title>
        <StarRating
          register={register("rating")}
          currentRating={watch("rating")}
        />
        <WriteForm
          register={register("content", { required: true })}
          contentLength={watch("content").length}
          disabled={isSubmitting}
        />
        <Button disabled={isSubmitting}>등록</Button>
      </Base>
    </Modal>
  );
};

export default CreateReview;
