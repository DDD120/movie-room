import Carousel from "components/common/Carousel";
import styled from "@emotion/styled";

const movieList = [
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
  {
    img: "https://placeimg.com/240/376/any",
    title: "제목",
    release_date: "2022-05-01",
  },
];

const Container = styled.section`
  margin: 120px 0;
`;

const MovieList = () => {
  return (
    <Container>
      <Carousel name="최근 개봉작" movieList={movieList} />
      <Carousel name="인기 상영작" movieList={movieList} />
      <Carousel name="최고 평점" movieList={movieList} />
      <Carousel name="개봉 예정작" movieList={movieList} />
    </Container>
  );
};

export default MovieList;
