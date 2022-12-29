import styled from "@emotion/styled";
import { Common } from "styles/common";
import { AiFillStar } from "react-icons/ai";
import { useGetMainInfoQuery } from "apis/movie-db-api";
import { Link } from "react-router-dom";
import Button from "components/common/Button";

const Base = styled.div`
  flex-shrink: 0;
  max-width: 320px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${Common.colors.greyOpacity};
  background-color: ${Common.colors.beige};
  overflow: hidden;
`;

const Head = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${Common.colors.greyOpacity};
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 900;
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 1.2rem;

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
    background-color: ${Common.colors.orange};
    border-radius: 10px;
  }
`;

const ReleaseYear = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MyReviewItem = ({ review }) => {
  const { data: movieData, isLoading } = useGetMainInfoQuery(review.movieId);

  const releaseYear = movieData?.release_date.slice(0, 4);

  const handleEditButton = () => {
    return;
  };

  return (
    <Base>
      {!isLoading && (
        <>
          <Head>
            <Link to={`/detail/${review.movieId}`}>
              <Title>
                {movieData.title} <ReleaseYear>({releaseYear})</ReleaseYear>
              </Title>
            </Link>
            <Rating>
              <AiFillStar />
              {review.rating}
            </Rating>
          </Head>

          <ReviewContent>{review.content}</ReviewContent>
          <Edit>
            <Button size="small" clickEvent={handleEditButton}>
              수정
            </Button>
          </Edit>
        </>
      )}
    </Base>
  );
};

export default MyReviewItem;
