import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import MainCastCarousel from "components/detail/MainCastCarousel";
import CrewCarousel from "components/detail/CrewCarousel";
import MovieListCarousel from "components/common/MovieListCarousel";
import SkeletonCarousel from "components/loading/SkeletonCarousel";
import { useParams } from "react-router-dom";
import ScrollRestoration from "components/common/ScrollRestoration";
import {
  useGetMainInfoQuery,
  useGetCreditsQuery,
  useGetSimilarQuery,
} from "apis/movie-db-api";
import ReviewCarousel from "components/detail/ReviewCarousel";
import { useGetReviewsByMovieQuery } from "apis/server-api";
import CarouselBox from "components/common/CarouselBox";

const Detail = () => {
  const { id } = useParams();

  const { data: movieMainInfo, isLoading: isMainInfoLoading } =
    useGetMainInfoQuery(id);
  const { data: movieCredits, isLoading: isCreditsLoading } =
    useGetCreditsQuery(id);
  const { data: movieSimilar, isLoading: isSimilarLoading } =
    useGetSimilarQuery(id);
  const { data: movieReviews, isLoading: isReviewsLoading } =
    useGetReviewsByMovieQuery({ id, limit: 9 });

  return (
    <>
      <ScrollRestoration />
      {
        <MainInfo
          movie={movieMainInfo}
          isLoading={isMainInfoLoading || isReviewsLoading}
          reviews={movieReviews}
        />
      }
      <Container>
        <CarouselBox>
          {isCreditsLoading || isSimilarLoading || isReviewsLoading ? (
            <>
              <SkeletonCarousel />
              <SkeletonCarousel />
              <SkeletonCarousel />
            </>
          ) : (
            <>
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
            </>
          )}
        </CarouselBox>
      </Container>
    </>
  );
};

export default Detail;
