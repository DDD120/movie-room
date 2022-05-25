import styled from "@emotion/styled";
import { Common } from "styles/common";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 140%;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 6px;
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

const Card = ({ poster_path, title, release_date, id }) => {
  const releaseYear = release_date.slice(0, 4);
  return (
    <Link to={`/detail/${id}`}>
      <CardContainer>
        <ImgWrapper>
          <Img
            src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${poster_path}`}
            alt={`${title} 포스터`}
          />
        </ImgWrapper>
        <Title>{title}</Title>
        <Year>{releaseYear}</Year>
      </CardContainer>
    </Link>
  );
};

export default Card;
