import MovieListCarousel from "components/common/MovieListCarousel";
import SkeletonCarousel from "components/loading/SkeletonCarousel";
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "apis/movie-db-api";
import CarouselBox from "components/common/CarouselBox";

const MovieList = () => {
  const { data: nowPlaying, isLoading: isNowplayingLoading } =
    useGetNowPlayingQuery();
  const { data: popular, isLoading: isPopularLoading } = useGetPopularQuery();
  const { data: topRated, isLoading: isTopRatedLoading } =
    useGetTopRatedQuery();
  const { data: upcoming, isLoading: isUpcomingLoading } =
    useGetUpcomingQuery();

  return (
    <CarouselBox>
      {isNowplayingLoading ||
      isPopularLoading ||
      isTopRatedLoading ||
      isUpcomingLoading ? (
        <>
          <SkeletonCarousel />
          <SkeletonCarousel />
          <SkeletonCarousel />
          <SkeletonCarousel />
        </>
      ) : (
        <>
          <MovieListCarousel name="최근 개봉작" movieList={nowPlaying} />
          <MovieListCarousel name="인기 상영작" movieList={popular} />
          <MovieListCarousel name="최고 평점" movieList={topRated} />
          <MovieListCarousel name="개봉 예정작" movieList={upcoming} />
        </>
      )}
    </CarouselBox>
  );
};

export default MovieList;
