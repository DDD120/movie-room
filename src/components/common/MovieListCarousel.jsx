import Carousel from "components/common/Carousel";
import MovieCard from "components/common/MovieCard";
import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

const MovieListCarousel = ({ name, movieList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [movieList]);

  return (
    <Carousel
      name={name}
      itemCount={movieList.length}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      showCount={5}
    >
      {movieList?.map((movie) => (
        <CarouselItem showCount={5} activeIndex={activeIndex} key={movie.id}>
          <MovieCard
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default MovieListCarousel;
