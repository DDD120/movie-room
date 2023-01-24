import styled from "@emotion/styled";
import { useGetReviewsByUserQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import MyReviewItem from "./MyReviewItem";
import { MasonryGrid } from "@egjs/react-grid";
import { useCallback, useState } from "react";
import LoadingAnimation from "components/loading/LoadingAnimation";
import { useRef, useEffect } from "react";
import { sortArray } from "lib/sort";
import { colors } from "styles/common";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const TitleBox = styled.div`
  margin: 40px 0;
`;

const Sort = styled.div`
  select {
    background-color: ${colors.beige};
    padding: 8px 12px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const ReviewBox = styled.div`
  margin: 20px 0;
  text-align: center;
  width: 100%;
`;

const MyReview = () => {
  const [isGetMovieInfo, setIsGetMovieInfo] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { data = [], isLoading } = useGetReviewsByUserQuery(id);
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

  useEffect(() => {
    setReviews([...data].reverse());
  }, [data]);

  return (
    <Base>
      <TitleBox>
        <Title>나의 리뷰</Title>
      </TitleBox>
      <Sort>
        <select name="sort" id="sort" onChange={handleSelectChange}>
          <option value="newest">최근작성순</option>
          <option value="oldest">오래된순</option>
          <option value="starDesc">별점높은순</option>
          <option value="starAsc">별점낮은순</option>
        </select>
      </Sort>
      <ReviewBox>
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
      </ReviewBox>
    </Base>
  );
};

export default MyReview;
