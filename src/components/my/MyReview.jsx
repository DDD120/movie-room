import styled from "@emotion/styled";
import { useGetReviewsQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import MyReviewItem from "./MyReviewItem";
import { MasonryGrid } from "@egjs/react-grid";
import { useCallback, useState } from "react";
import LoadingAnimation from "components/loading/LoadingAnimation";
import { useEffect } from "react";
import { useRef } from "react";
import { sortArray } from "lib/sort";
import { Common } from "styles/common";

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

const SortContainer = styled.div`
  select {
    background-color: ${Common.colors.beige};
    padding: 8px 12px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const ReviewContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  width: 100%;
`;

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [isGetMovieInfo, setIsGetMovieInfo] = useState(false);
  const { data = [], isLoading } = useGetReviewsQuery(id);
  const gridRef = useRef(null);

  const handleSelectChange = (e) => {
    setReviews((reviews) => [...sortArray(reviews, e.target.value)]);
  };

  const showReview = useCallback(() => {
    setIsGetMovieInfo(true);
  }, []);

  useEffect(() => {
    if (!isLoading && isGetMovieInfo) {
      gridRef.current.renderItems({ useResize: true });
    }
  }, [isLoading, isGetMovieInfo]);

  console.log(reviews);

  useEffect(() => {
    setReviews([...data].reverse());
  }, [data]);

  return (
    <Base>
      <TitleWrapper>
        <Title name="나의 리뷰" />
      </TitleWrapper>
      <SortContainer>
        <select name="sort" id="sort" onChange={handleSelectChange}>
          <option value="newest">최근작성순</option>
          <option value="oldest">오래된순</option>
          <option value="starDesc">별점높은순</option>
          <option value="starAsc">별점낮은순</option>
        </select>
      </SortContainer>
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
