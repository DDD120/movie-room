import axios from "axios";

export const fetchTheMovieDB = axios.create({
  baseURL: `${process.env.REACT_APP_THE_MOVIE_DB_API_HOST}`,
  params: {
    api_key: process.env.REACT_APP_THE_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export const fetchServer = axios.create({
  baseURL: "http://localhost:4000",
});
