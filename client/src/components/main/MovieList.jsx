import MovieListCarousel from "components/common/MovieListCarousel";
import SkeletonCarousel from "components/loading/SkeletonCarousel";
import { useGetMainPageMoviesQuery } from "apis/movie-db-api";
import CarouselBox from "components/common/CarouselBox";

const MovieList = () => {
  const { data: { nowPlaying, popular, topRated, upcoming } = {}, isLoading } =
    useGetMainPageMoviesQuery();

  return (
    <CarouselBox>
      {isLoading ? (
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
