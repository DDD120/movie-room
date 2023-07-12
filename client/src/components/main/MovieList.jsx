import MovieListCarousel from "components/common/MovieListCarousel";
import SkeletonCarousel from "components/loading/SkeletonCarousel";
import CarouselBox from "components/common/CarouselBox";
import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "apis/movie-db-api";

const MovieList = () => {
  const { data: nowPlaying, isLoading: isNowplayinLoading } =
    useGetNowPlayingQuery();
  const { data: popular, isLoading: isPopularLoading } = useGetPopularQuery();
  const { data: topRated, isLoading: isTopRatedLoading } =
    useGetTopRatedQuery();
  const { data: upcoming, isLoading: isUpcomingLoading } =
    useGetUpcomingQuery();

  const movieList = [
    {
      name: "최근 개봉작",
      movieList: nowPlaying,
      isLoading: isNowplayinLoading,
    },
    {
      name: "인기 상영작",
      movieList: popular,
      isLoading: isPopularLoading,
    },
    {
      name: "최고 평점",
      movieList: topRated,
      isLoading: isTopRatedLoading,
    },
    {
      name: "개봉 예정작",
      movieList: upcoming,
      isLoading: isUpcomingLoading,
    },
  ];

  return (
    <CarouselBox>
      {movieList.map((list) =>
        list.isLoading ? (
          <SkeletonCarousel key={list.name} />
        ) : (
          <MovieListCarousel
            key={list.name}
            name={list.name}
            movieList={list.movieList}
          />
        )
      )}
    </CarouselBox>
  );
};

export default MovieList;
