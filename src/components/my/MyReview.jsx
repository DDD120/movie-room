import styled from "@emotion/styled";
import { useGetReviewsQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import MyReviewItem from "./MyReviewItem";
import { MasonryGrid } from "@egjs/react-grid";
import { memo, useCallback, useState } from "react";
import LoadingAnimation from "components/loading/LoadingAnimation";
import { useEffect } from "react";
import { useRef } from "react";

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
  text-align: center;
  width: 100%;
`;

const MyReview = () => {
  const { id } = useParams();
  const [isGetMovieInfo, setIsGetMovieInfo] = useState(false);
  const { data: reviews = [], isLoading } = useGetReviewsQuery(id);
  const gridRef = useRef(null);

  const showReview = useCallback(() => {
    setIsGetMovieInfo(true);
  }, []);

  useEffect(() => {
    if (!isLoading && isGetMovieInfo) {
      gridRef.current.renderItems({ useResize: true });
    }
  }, [isLoading, isGetMovieInfo]);

  return (
    <Base>
      <TitleWrapper>
        <Title name="나의 리뷰" />
      </TitleWrapper>
      <ReviewContainer>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <MasonryGrid
            gap={8}
            defaultDirection={"end"}
            align={"center"}
            ref={gridRef}
          >
            {reviews?.map((review) => (
              <MyReviewItem
                key={review.movieId}
                review={review}
                showReview={showReview}
              />
            ))}
          </MasonryGrid>
        )}
      </ReviewContainer>
    </Base>
  );
};

export default MyReview;
