import { CarouselContainer } from "styles/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieListData } from "store/movieList";
import MovieListCarousel from "../common/MovieListCarousel";

const MovieList = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRate, upcoming, loading } = useSelector(
    (state) => state.movieList
  );

  useEffect(() => {
    dispatch(fetchMovieListData());
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        <CarouselContainer>
          <MovieListCarousel name="최근 개봉작" movieList={nowPlaying} />
          <MovieListCarousel name="인기 상영작" movieList={popular} />
          <MovieListCarousel name="최고 평점" movieList={topRate} />
          <MovieListCarousel name="개봉 예정작" movieList={upcoming} />
        </CarouselContainer>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default MovieList;
