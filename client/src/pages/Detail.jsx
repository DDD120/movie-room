import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import MainCastCarousel from "components/detail/MainCastCarousel";
import CrewCarousel from "components/detail/CrewCarousel";
import MovieListCarousel from "components/common/MovieListCarousel";
import { useParams } from "react-router-dom";
import { useGetDetailPageMovieQuery } from "apis/movie-db-api";
import ReviewCarousel from "components/detail/ReviewCarousel";
import { useGetReviewsByMovieQuery } from "apis/server-api";
import CarouselBox from "components/common/CarouselBox";
import useScrollRestoration from "hooks/useScrollRestoration";
import LoadingDetail from "components/loading/LoadingDetail";
import Meta from "components/common/Meta";
import OgImg from "assets/defailt-og.png";

const Detail = () => {
  const { id } = useParams();
  const {
    data: { movieMainInfo, movieCredits, movieSimilar } = {},
    isLoading: isMovieInfoLoading,
  } = useGetDetailPageMovieQuery(id);
  const { data: movieReviews, isLoading: isReviewsLoading } =
    useGetReviewsByMovieQuery({ id, limit: 9 });

  useScrollRestoration();

  return (
    <>
      {isMovieInfoLoading || isReviewsLoading ? (
        <LoadingDetail />
      ) : (
        <>
          <Meta
            title={`${movieMainInfo.title} - MOVIE ROOM`}
            description={`${movieMainInfo.title}의 상세정보를 확인해보세요`}
            keywords={`${movieMainInfo.title}, 영화`}
            imgsrc={
              movieMainInfo.backdrop_path
                ? `url(${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${movieMainInfo.backdrop_path})`
                : OgImg
            }
          />
          <MainInfo movie={movieMainInfo} reviews={movieReviews} />
          <Container>
            <CarouselBox>
              <ReviewCarousel
                name="리뷰"
                movie={movieMainInfo}
                reviews={movieReviews}
              />
              <MainCastCarousel
                name="주요 출연진"
                castList={movieCredits.cast}
              />
              <CrewCarousel name="감독" crewList={movieCredits.crew} />
              <MovieListCarousel name="비슷한 작품" movieList={movieSimilar} />
            </CarouselBox>
          </Container>
        </>
      )}
    </>
  );
};

export default Detail;
