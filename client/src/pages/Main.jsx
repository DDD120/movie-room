import Container from "components/common/Container";
import HeroBanner from "components/main/HeroBanner";
import MovieList from "components/main/MovieList";
import ToTop from "components/common/ToTop";
import { useCallback, useState } from "react";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const Main = () => {
  const [isShowToTop, setIsShowToTop] = useState(false);

  const handleIntersect = useCallback((entry) => {
    entry[0].isIntersecting ? setIsShowToTop(false) : setIsShowToTop(true);
  }, []);

  const { setTarget } = useIntersectionObserver({
    onIntersect: handleIntersect,
  });

  return (
    <Container>
      <HeroBanner target={setTarget} />
      <MovieList />
      <ToTop isShow={isShowToTop} />
    </Container>
  );
};

export default Main;
