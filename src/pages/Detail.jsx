import Container from "components/common/Container";
import MainInfo from "components/detail/MainInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetailData } from "store/movieDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movieDetail);
  useEffect(() => {
    dispatch(fetchMovieDetailData(id));
  }, [dispatch, id]);

  return (
    <>
      <MainInfo movie={movieDetail} />
      <Container></Container>
    </>
  );
};

export default Detail;
