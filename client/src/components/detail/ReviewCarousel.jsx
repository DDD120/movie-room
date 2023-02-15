import Carousel from "components/common/Carousel";
import CarouselItem from "components/common/CarouselItem";
import useCheckWrittenReview from "hooks/useCheckWrittenReview";
import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const ReviewCarousel = ({ name, movie, reviews }) => {
  const [reviewList, setReviewList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { writtenReview, isWritten } = useCheckWrittenReview(reviews);

  useEffect(() => {
    setActiveIndex(0);
  }, [reviewList]);

  useEffect(() => {
    if (!reviews) {
      return;
    }
    if (isWritten) {
      setReviewList(() => [
        writtenReview,
        ...reviews.filter((review) => review._id !== writtenReview._id),
      ]);
    } else {
      setReviewList(() => [...reviews]);
    }
  }, [isWritten, reviews, writtenReview]);

  return (
    <>
      <Carousel
        name={name}
        itemCount={reviewList?.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        showCount={3}
      >
        {reviewList?.map((review) => (
          <CarouselItem
            showCount={3}
            activeIndex={activeIndex}
            key={review._id}
          >
            <ReviewItem
              isMyReview={isWritten ? review._id === writtenReview._id : false}
              review={review}
              movie={movie}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

export default ReviewCarousel;
