import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import MainCastCarousel from "components/detail/MainCastCarousel";
import CrewCarousel from "components/detail/CrewCarousel";
import MovieListCarousel from "components/common/MovieListCarousel";
import { useParams } from "react-router-dom";
import {
  useGetCreditsQuery,
  useGetMainInfoQuery,
  useGetSimilarQuery,
} from "apis/movie-db-api";
import ReviewCarousel from "components/detail/ReviewCarousel";
import { useGetReviewsByMovieQuery } from "apis/server-api";
import CarouselBox from "components/common/CarouselBox";
import useScrollRestoration from "hooks/useScrollRestoration";
import Meta from "components/common/Meta";
import SkeletonMainInfo from "components/loading/SkeletonMainInfo";
import SkeletonCarousel from "components/loading/SkeletonCarousel";

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

  useScrollRestoration();

  return (
    <>
      <Meta
        title={`${movieMainInfo?.title} - MOVIE ROOM`}
        description={`${movieMainInfo?.title}의 상세정보를 확인해보세요`}
        keywords={`${movieMainInfo?.title}, 영화`}
      />
      {isMainInfoLoading || isReviewsLoading ? (
        <SkeletonMainInfo />
      ) : (
        <MainInfo movie={movieMainInfo} reviews={movieReviews} />
      )}
      <Container>
        <CarouselBox>
          {!isReviewsLoading && (
            <ReviewCarousel
              name="리뷰"
              movie={movieMainInfo}
              reviews={movieReviews}
            />
          )}
          {isCreditsLoading ? (
            <>
              <SkeletonCarousel />
              <SkeletonCarousel />
            </>
          ) : (
            <>
              <MainCastCarousel
                name="주요 출연진"
                castList={movieCredits.cast}
              />
              <CrewCarousel name="감독" crewList={movieCredits.crew} />
            </>
          )}
          {isSimilarLoading ? (
            <SkeletonCarousel />
          ) : (
            <MovieListCarousel name="비슷한 작품" movieList={movieSimilar} />
          )}
        </CarouselBox>
      </Container>
    </>
  );
};

export default Detail;
