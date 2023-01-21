import styled from "@emotion/styled";
import { colors } from "styles/common";
import { AiFillStar } from "react-icons/ai";
import { useGetMainInfoQuery } from "apis/movie-db-api";
import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import { useDeleteReviewMutation } from "apis/server-api";
import UpdateReview from "components/modal/ReviewModal/UpdateReview";
import { useEffect } from "react";
import { showToast } from "lib/toast";

const Base = styled.div`
  position: relative;
  flex-shrink: 0;
  max-width: 320px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${colors.greyOpacity};
  background-color: ${colors.beige};
  text-align: left;
`;

const Head = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.greyOpacity};
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 900;
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 1.2rem;

  svg {
    transform: translateY(2px);
  }
`;

const ReviewContent = styled.div`
  white-space: pre-line;
  word-break: break-all;
  overflow-y: scroll;
  margin: 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: ${colors.orange};
    border-radius: 10px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: ${colors.grey};
`;

const ReleaseYear = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuListItemBtn = styled.button`
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  transition: filter 0.3s;
  color: ${colors.black};
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const MyReviewItem = ({ review, showReview }) => {
  const [isShowReviewModal, setIsShowReviewModal] = useState(false);
  const { data: movie, isSuccess: isGetSuccess } = useGetMainInfoQuery(
    review.movieId
  );
  const [deleteReview, { data: deleteReviewRes, isSuccess: isDeleteSuccess }] =
    useDeleteReviewMutation();

  const releaseYear = movie?.release_date.slice(0, 4);

  const handleModalClose = () => {
    setIsShowReviewModal(false);
  };

  const handleUpdateClick = () => {
    setIsShowReviewModal(true);
  };

  const handleDeleteBtnClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteReview({ id: review._id });
    }
  };

  useEffect(() => {
    if (isGetSuccess) {
      showReview();
    }
  }, [isGetSuccess, showReview, movie]);

  useEffect(() => {
    if (isDeleteSuccess) {
      showToast(deleteReviewRes.message);
    }
  }, [isDeleteSuccess, deleteReviewRes, showReview]);

  return (
    <Base>
      <Head>
        <Link to={`/detail/${review.movieId}`}>
          <Title>
            {movie?.title} <ReleaseYear>({releaseYear})</ReleaseYear>
          </Title>
        </Link>
        <Rating>
          <AiFillStar />
          {review.rating}
        </Rating>
      </Head>
      <ReviewContent>{review.content}</ReviewContent>
      <Bottom>
        <Date>{dayjs(review.updatedAt).format("YY.MM.DD")}</Date>
        <Menu>
          <MenuListItemBtn onClick={handleUpdateClick}>수정</MenuListItemBtn>
          {isShowReviewModal && (
            <UpdateReview
              review={review}
              movie={movie}
              onClose={handleModalClose}
            />
          )}
          <MenuListItemBtn onClick={handleDeleteBtnClick}>삭제</MenuListItemBtn>
        </Menu>
      </Bottom>
    </Base>
  );
};

export default MyReviewItem;
