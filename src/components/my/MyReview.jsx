import styled from "@emotion/styled";
import { useGetReviewsQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import MyReviewItem from "./MyReviewItem";
import { MasonryGrid } from "@egjs/react-grid";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const TitleWrapper = styled.div`
  margin: 40px 0;
`;

const ReviewContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const MyReview = () => {
  const { id } = useParams();
  const { data: reviews } = useGetReviewsQuery(id);

  return (
    <Base>
      <TitleWrapper>
        <Title name="나의 리뷰" />
      </TitleWrapper>
      <ReviewContainer>
        <MasonryGrid gap={8} defaultDirection={"end"} align={"center"}>
          {reviews?.map((review) => (
            <MyReviewItem key={review.movieId} review={review} />
          ))}
        </MasonryGrid>
      </ReviewContainer>
    </Base>
  );
};

export default MyReview;
