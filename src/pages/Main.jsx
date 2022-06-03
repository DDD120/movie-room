import Container from "components/common/Container";
import HeroBanner from "components/main/HeroBanner";
import MovieList from "components/main/MovieList";
import ToTop from "components/common/ToTop";

const Main = () => {
  return (
    <Container>
      <HeroBanner />
      <MovieList />
      <ToTop />
    </Container>
  );
};

export default Main;
