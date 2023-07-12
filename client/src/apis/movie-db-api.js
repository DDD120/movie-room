import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEFAULT_PARAMS = `api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=ko-KR`;
const setUrl = (url) => `${url}${DEFAULT_PARAMS}`;

export const moviedbApi = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_THE_MOVIE_DB_API_HOST,
  }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query({
      query: () => ({ url: setUrl("movie/now_playing?") }),
      transformResponse: (response) => response.results,
    }),
    getPopular: builder.query({
      query: () => ({ url: setUrl("movie/popular?") }),
      transformResponse: (response) => response.results,
    }),
    getTopRated: builder.query({
      query: () => ({ url: setUrl("movie/top_rated?") }),
      transformResponse: (response) => response.results,
    }),
    getUpcoming: builder.query({
      query: () => ({ url: setUrl("movie/upcoming?") }),
      transformResponse: (response) => response.results,
    }),
    getCredits: builder.query({
      query: (id) => ({ url: setUrl(`movie/${id}/credits?`) }),
      transformResponse: (response) => {
        return {
          cast: response.cast.slice(0, 15),
          crew: response.crew.filter(
            (crew) => crew["department"] === "Directing"
          ),
        };
      },
    }),
    getSimilar: builder.query({
      query: (id) => ({ url: setUrl(`movie/${id}/similar?page=20&`) }),
      transformResponse: (response) => response.results,
    }),
    getMainInfo: builder.query({
      query: (id) => ({ url: setUrl(`movie/${id}?`) }),
    }),
    getSearch: builder.query({
      query: ({ query, page = 1 }) => ({
        url: setUrl(`search/movie?query=${query}&page=${page}&`),
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetMainInfoQuery,
  useGetCreditsQuery,
  useGetSimilarQuery,
  useLazyGetSearchQuery,
} = moviedbApi;
