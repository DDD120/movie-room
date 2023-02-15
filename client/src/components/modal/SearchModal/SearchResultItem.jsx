import styled from "@emotion/styled";
import NoImg from "components/common/NoImg";
import { colors } from "styles/common";

const Base = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: 0.2s;
  border-radius: 12px;
  background-color: ${({ isFocus }) => isFocus && colors.orangeOpacity};

  &:hover {
    background-color: ${colors.orangeOpacity};
  }
`;

const ImgBox = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  max-width: 80px;
  overflow: hidden;
  border-radius: 12px;
`;

const Poster = styled.img`
  width: 100%;
`;

const Title = styled.p`
  text-align: left;
`;

const SearchResultItem = ({ movie, isFocus, scrollRef }) => {
  return (
    <Base ref={isFocus ? scrollRef : undefined} isFocus={isFocus}>
      <ImgBox>
        {movie.poster_path ? (
          <Poster
            src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${movie.poster_path}`}
            alt={`${movie.title} 포스터`}
          />
        ) : (
          <NoImg />
        )}
      </ImgBox>
      <Title>{movie.title}</Title>
    </Base>
  );
};

export default SearchResultItem;
