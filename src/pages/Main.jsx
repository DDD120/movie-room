import Container from "components/common/Container";
import HeroBanner from "components/main/HeroBanner";
import MovieList from "components/main/MovieList";

const Main = () => {
  return (
    <Container>
      <HeroBanner />
      <MovieList />
    </Container>
  );
};

export default Main;
