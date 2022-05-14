import Carousel from "components/common/Carousel";

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

const MovieList = () => {
  return (
    <>
      <Carousel name="최근 개봉작" movieList={movieList} />
      <Carousel name="인기 상영작" movieList={movieList} />
      <Carousel name="최고 평점" movieList={movieList} />
      <Carousel name="개봉 예정작" movieList={movieList} />
    </>
  );
};

export default MovieList;
