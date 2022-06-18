import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import MainCastCarousel from "components/detail/MainCastCarousel";
import CrewCarousel from "components/detail/CrewCarousel";
import MovieListCarousel from "components/common/MovieListCarousel";
import SkeletonCarousel from "components/skeleton/SkeletonCarousel";
import { CarouselContainer } from "styles/common";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchMovieDetailData } from "store/movieDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieMainInfo, movieCredits, movieSimilar, loading } = useSelector(
    (state) => state.movieDetail
  );
  useEffect(() => {
    dispatch(fetchMovieDetailData(id));
  }, [dispatch, id]);

  return (
    <>
      <MainInfo movie={movieMainInfo} />
      <Container>
        {!loading ? (
          <CarouselContainer>
            <MainCastCarousel
              name={"주요 출연진"}
              castList={movieCredits.cast}
            />
            <CrewCarousel name={"감독"} crewList={movieCredits.crew} />
            <MovieListCarousel name={"비슷한 작품"} movieList={movieSimilar} />
          </CarouselContainer>
        ) : (
          <>
            <SkeletonCarousel />
            <SkeletonCarousel />
            <SkeletonCarousel />
          </>
        )}
      </Container>
    </>
  );
};

export default Detail;
