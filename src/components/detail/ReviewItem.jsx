import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDeleteReviewMutation } from "apis/server-api";
import UpdateReview from "components/modal/ReviewModal/UpdateReview";
import { showToast } from "lib/toast";

const Base = styled.div`
  position: relative;
  flex-shrink: 0;
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

const User = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  gap: 8px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  p {
    font-size: ${fontSize.md};
    white-space: pre-line;
    word-break: break-all;
  }
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: ${fontSize.md};
  margin: 8px;

  svg {
    transform: translateY(2px);
  }
`;

const ReviewContent = styled.div`
  white-space: pre-line;
  word-break: break-all;
  height: 80px;
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
  font-size: ${fontSize.sm};
  color: ${colors.grey};
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

const ReviewItem = ({ review, movie, isMyReview }) => {
  const [isShowReviewModal, setIsShowReviewModal] = useState(false);
  const [deleteReview, { data: deleteReviewRes, isSuccess: isDeleteSuccess }] =
    useDeleteReviewMutation();

  const handleModalClose = () => {
    setIsShowReviewModal(false);
  };

  const handleUpdateClick = () => {
    setIsShowReviewModal(true);
  };

  const handleDeleteClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteReview({ id: review._id });
    }
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      showToast(deleteReviewRes.message);
    }
  }, [isDeleteSuccess, deleteReviewRes]);

  return (
    <Base>
      <Head>
        <User>
          <img src={review.user.thumbnail} alt="프로필 사진" />
          <p>{review.user.nickname}</p>
        </User>
        <Rating>
          <AiFillStar />
          {review.rating}
        </Rating>
      </Head>
      <ReviewContent>{review.content}</ReviewContent>
      <Bottom>
        <Date>{dayjs(review.updatedAt).format("YY.MM.DD")}</Date>
        {isMyReview && (
          <Menu>
            <MenuListItemBtn onClick={handleUpdateClick}>수정</MenuListItemBtn>
            {isShowReviewModal && (
              <UpdateReview
                review={review}
                movie={movie}
                onClose={handleModalClose}
              />
            )}
            <MenuListItemBtn onClick={handleDeleteClick}>삭제</MenuListItemBtn>
          </Menu>
        )}
      </Bottom>
    </Base>
  );
};

export default ReviewItem;
