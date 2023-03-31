import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDeleteReviewMutation } from "apis/server-api";
import UpdateReview from "components/modal/ReviewModal/UpdateReview";
import { showToast } from "lib/toast";
import { AnimatePresence } from "framer-motion";

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
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 0px 4px ${colors.greyOpacity};
  }
`;

const Head = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.greyOpacity};
`;

const Title = styled.h1`
  font-size: ${fontSize.md};
  font-weight: 900;
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: ${fontSize.md};

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
  font-size: ${fontSize.base};
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

const MyReviewItem = ({ review }) => {
  const [isShowReviewModal, setIsShowReviewModal] = useState(false);

  const [deleteReview, { data: deleteReviewRes, isSuccess: isDeleteSuccess }] =
    useDeleteReviewMutation();

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
        <Link to={`/detail/${review.movieId}`}>
          <Title>{review.title}</Title>
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
          <MenuListItemBtn onClick={() => setIsShowReviewModal(true)}>
            수정
          </MenuListItemBtn>
          <AnimatePresence>
            {isShowReviewModal && (
              <UpdateReview
                review={review}
                onClose={() => setIsShowReviewModal(false)}
              />
            )}
          </AnimatePresence>
          <MenuListItemBtn onClick={handleDeleteClick}>삭제</MenuListItemBtn>
        </Menu>
      </Bottom>
    </Base>
  );
};

export default MyReviewItem;
