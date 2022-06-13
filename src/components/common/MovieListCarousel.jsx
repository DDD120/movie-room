import styled from "@emotion/styled";
import MovieCard from "components/common/MovieCard";
import Carousel from "components/common/Carousel";
import { useState } from "react";

const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 1 0 20%;
  transition: 200ms ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
  > img {
    width: 100%;
  }
`;

const MovieListCarousel = ({ name, movieList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      name={name}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      itemCount={movieList?.length}
      showCount={5}
    >
      {movieList.map((movie) => (
        <CarouselItem activeIndex={activeIndex} key={movie.id}>
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
