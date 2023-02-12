import styled from "@emotion/styled";
import { useGetReviewsByUserQuery } from "apis/server-api";
import Title from "components/common/Title";
import { useParams } from "react-router-dom";
import MyReviewItem from "./MyReviewItem";
import { MasonryGrid } from "@egjs/react-grid";
import LoadingAnimation from "components/loading/LoadingAnimation";
import { useState, useRef, useEffect } from "react";
import { sortArray } from "lib/sort";
import { colors } from "styles/colors";

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
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { data = [], isLoading } = useGetReviewsByUserQuery(id);
  const gridRef = useRef(null);

  const handleSelectChange = (e) => {
    setReviews((reviews) => [...sortArray(reviews, e.target.value)]);
  };

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
              <MyReviewItem key={review.movieId} review={review} />
            ))}
          </MasonryGrid>
        )}
      </ReviewBox>
    </Base>
  );
};

export default MyReview;
