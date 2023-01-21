import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCheckWrittenReview = (reviewList) => {
  const [writtenReview, setWrittenReview] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!isLoggedIn || !reviewList) {
      return;
    }

    if (reviewList.length === 0) {
      return setWrittenReview(null);
    }
    const writtenReview = reviewList.filter((review) => {
      return review.user._id === id;
    });

    if (writtenReview) {
      setWrittenReview(writtenReview);
    }
  }, [reviewList, isLoggedIn, id]);

  return {
    isWritten: !!writtenReview,
    writtenReview: writtenReview ? writtenReview[0] : null,
  };
};

export default useCheckWrittenReview;
