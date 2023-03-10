import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";
import { Link } from "react-router-dom";
import NoImg from "./NoImg";
import { getYear } from "lib/filter";

const Base = styled.div`
  cursor: pointer;
`;

const ImgBox = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 12px;

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
  font-size: ${fontSize.sm};
  color: ${colors.grey};
`;

const MovieCard = ({ poster_path, title, release_date, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Base>
        <ImgBox>
          {poster_path ? (
            <Img
              src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${poster_path}`}
              alt={`${title} 포스터`}
            />
          ) : (
            <NoImg />
          )}
        </ImgBox>
        <Title>{title}</Title>
        <Year>{getYear(release_date)}</Year>
      </Base>
    </Link>
  );
};

export default MovieCard;
