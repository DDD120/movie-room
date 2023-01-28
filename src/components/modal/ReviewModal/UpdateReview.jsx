import Modal from "../Modal";
import Button from "components/common/Button";
import styled from "@emotion/styled";
import StarRating from "./StarRating";
import { useUpdateReviewMutation } from "apis/server-api";
import WriteForm from "./WriteForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { showToast } from "lib/toast";

const Base = styled.form`
  width: 100%;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const UpdateReview = ({ review, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      content: review.content,
      rating: review.rating,
    },
  });

  const [updateReview, { data: updateReviewRes, isSuccess }] =
    useUpdateReviewMutation();

  const handleWirteReviewSubmit = ({ content, rating }) => {
    updateReview({
      id: review._id,
      content,
      rating,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
      showToast(updateReviewRes.message);
    }
  }, [isSuccess, updateReviewRes, onClose]);

  return (
    <Modal onClose={onClose}>
      <Base onSubmit={handleSubmit(handleWirteReviewSubmit)}>
        <Title>{review.title}</Title>
        <StarRating
          register={register("rating")}
          currentRating={watch("rating")}
        />
        <WriteForm
          register={register("content", { required: true })}
          value={watch("content")}
          contentLength={watch("content").length}
          disabled={isSubmitting}
        />
        <Button disabled={isSubmitting}>수정</Button>
      </Base>
    </Modal>
  );
};

export default UpdateReview;
