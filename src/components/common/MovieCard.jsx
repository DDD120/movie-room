import styled from "@emotion/styled";
import { Common } from "styles/common";
import { Link } from "react-router-dom";
import { NoImg } from "styles/common";

const CardContainer = styled.div`
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 12px;
  background-color: ${Common.colors.lightgray};

  &:hover {
    transition: 0.3s;
    transform: translateY(-4px);
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  object-fit: cover;
`;

const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Year = styled.div`
  font-size: 0.875rem;
  color: ${Common.colors.grey};
`;

const MovieCard = ({ poster_path, title, release_date, id }) => {
  const releaseYear = release_date.slice(0, 4);
  return (
    <Link to={`/detail/${id}`}>
      <CardContainer>
        <ImgWrapper>
          {poster_path ? (
            <Img
              src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${poster_path}`}
              alt={`${title} 포스터`}
            />
          ) : (
            <NoImg>NO IMAGE</NoImg>
          )}
        </ImgWrapper>
        <Title>{title}</Title>
        <Year>{releaseYear}</Year>
      </CardContainer>
    </Link>
  );
};

export default MovieCard;
