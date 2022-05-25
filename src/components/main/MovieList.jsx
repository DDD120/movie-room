import Carousel from "components/common/Carousel";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieListData } from "store/movieList";

const Container = styled.section`
  margin: 120px 0;
`;

const MovieList = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRate, upcoming } = useSelector(
    (state) => state.movieList
  );

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchMovieListData());
  }, [dispatch]);

  return (
    <Container>
      <Carousel name="최근 개봉작" movieList={nowPlaying} />
      <Carousel name="인기 상영작" movieList={popular} />
      <Carousel name="최고 평점" movieList={topRate} />
      <Carousel name="개봉 예정작" movieList={upcoming} />
    </Container>
  );
};

export default MovieList;
