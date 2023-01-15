import { useGetReviewsQuery } from "apis/server-api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCheckWrittenReview = (movieId) => {
  const [isWritten, setIsWritten] = useState(false);
  const { id } = useSelector((state) => state.user.user);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { data: reviews = [] } = useGetReviewsQuery(id);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    const checkWritten = reviews.some((review) => {
      return review.movieId === movieId;
    });
    checkWritten ? setIsWritten(true) : setIsWritten(false);
  }, [reviews, movieId, isLoggedIn]);

  return isWritten;
};

export default useCheckWrittenReview;
