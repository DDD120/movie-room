import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import MainCastCarousel from "components/detail/MainCastCarousel";
import CrewCarousel from "components/detail/CrewCarousel";
import MovieListCarousel from "components/common/MovieListCarousel";
import { CarouselContainer } from "styles/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetailData } from "store/movieDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieMainInfo, movieCredits, movieSimilar } = useSelector(
    (state) => state.movieDetail
  );
  useEffect(() => {
    dispatch(fetchMovieDetailData(id));
  }, [dispatch, id]);

  return (
    <>
      <MainInfo movie={movieMainInfo} />
      <Container>
        <CarouselContainer>
          <MainCastCarousel name={"주요 출연진"} castList={movieCredits.cast} />
          <CrewCarousel name={"감독"} crewList={movieCredits.crew} />
          <MovieListCarousel name={"비슷한 작품"} movieList={movieSimilar} />
        </CarouselContainer>
      </Container>
    </>
  );
};

export default Detail;
