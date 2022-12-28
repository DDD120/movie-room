import styled from "@emotion/styled";
import { useGetReviewsQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import ReviewItem from "./ReviewItem";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const TitleWrapper = styled.div`
  margin: 50px 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 100%;
`;

const MyReview = () => {
  const { id } = useParams();
  const { data: reviews } = useGetReviewsQuery(id);

  console.log(reviews);

  return (
    <Base>
      <TitleWrapper>
        <Title name="나의 리뷰" />
      </TitleWrapper>

      <ReviewContainer>
        {reviews?.map((review) => (
          <ReviewItem key={review.movieId} review={review} />
        ))}
      </ReviewContainer>
    </Base>
  );
};

export default MyReview;
