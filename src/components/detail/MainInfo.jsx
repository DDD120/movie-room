import styled from "@emotion/styled";
import { Common } from "styles/common";
import WriteReview from "components/common/WriteReview";

const Background = styled.div`
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: ${(props) =>
    `url(${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${props.backdrop_path})`};
`;

const MainInfoContiner = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  color: ${Common.colors.white};
  padding: 40px 0;
`;
const ImgContainer = styled.div`
  flex: 2;
  max-width: 360px;
  width: 100%;
  aspect-ratio: 1 / 1.416;
  overflow: hidden;
  border-radius: 12px;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
`;
const InfoContainer = styled.div`
  flex: 3;
  position: relative;
  padding-bottom: 60px;
`;
const Title = styled.h1`
  font-size: 2.275rem;
`;
const Year = styled.span`
  font-size: 1.225rem;
  margin: 0 4px;
  color: ${Common.colors.grey};
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 20px 0;
`;
const Category = styled.span`
  color: ${Common.colors.grey};
`;
const Tagline = styled.i`
  font-size: 1.275rem;
  font-weight: 700;
`;
const Overview = styled.p`
  margin: 10px 0;
`;

const MainInfo = ({ movie }) => {
  const releaseYear = movie.release_date?.slice(0, 4);
  return !movie ? (
    <div>'Loading...'</div>
  ) : (
    <Background backdrop_path={movie.backdrop_path}>
      <MainInfoContiner>
        <ImgContainer>
          <Img
            src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${movie.poster_path}`}
            alt={`${movie.title} 포스터`}
          />
        </ImgContainer>
        <InfoContainer>
          <Title>
            {movie.title}
            <Year>({releaseYear})</Year>
          </Title>
          <Info>
            <Category>원제</Category>
            <span>{movie.original_title}</span>
            <Category>원어</Category>
            <span>{movie.original_language?.toUpperCase()}</span>
            <Category>발매일</Category>
            <span>{movie.release_date}</span>
            <Category>장르</Category>
            <span>{movie.genres?.map((genre) => genre.name).join("/")}</span>
            <Category>상영시간</Category>
            <span>{movie.runtime}분</span>
          </Info>
          {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}
          <Overview>{movie.overview}</Overview>
          <WriteReview />
        </InfoContainer>
      </MainInfoContiner>
    </Background>
  );
};

export default MainInfo;
