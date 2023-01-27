import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEFAULT_PARAMS = `api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=ko-KR`;

export const moviedbApi = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_THE_MOVIE_DB_API_HOST}`,
  }),
  endpoints: (builder) => ({
    getMainPageMovies: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const allPromise = Promise.allSettled([
          fetchWithBQ(`movie/now_playing?${DEFAULT_PARAMS}`),
          fetchWithBQ(`movie/popular?${DEFAULT_PARAMS}`),
          fetchWithBQ(`movie/top_rated?${DEFAULT_PARAMS}`),
          fetchWithBQ(`movie/upcoming?${DEFAULT_PARAMS}`),
        ]);
        const [nowPlaying, popular, topRated, upcoming] = await allPromise;

        return {
          data: {
            nowPlaying: nowPlaying.value.data.results,
            popular: popular.value.data.results,
            topRated: topRated.value.data.results,
            upcoming: upcoming.value.data.results,
          },
        };
      },
    }),
    getDetailPageMovie: builder.query({
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        const allPromise = Promise.allSettled([
          fetchWithBQ(`movie/${id}?${DEFAULT_PARAMS}`),
          fetchWithBQ(`movie/${id}/credits?${DEFAULT_PARAMS}`),
          fetchWithBQ(`movie/${id}/similar?page=20&${DEFAULT_PARAMS}`),
        ]);
        const [movieMainInfo, movieCredits, movieSimilar] = await allPromise;

        return {
          data: {
            movieMainInfo: movieMainInfo.value.data,
            movieCredits: {
              cast: movieCredits.value.data.cast.slice(0, 15),
              crew: movieCredits.value.data.crew.filter(
                (crew) => crew["department"] === "Directing"
              ),
            },
            movieSimilar: movieSimilar.value.data.results,
          },
        };
      },
    }),
    getMainInfo: builder.query({
      query: (id) => ({ url: `movie/${id}?${DEFAULT_PARAMS}` }),
    }),
    getSearch: builder.query({
      query: ({ query, page = 1 }) => ({
        url: `search/movie?query=${query}&page=${page}&${DEFAULT_PARAMS}`,
      }),
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const {
  useGetMainPageMoviesQuery,
  useGetDetailPageMovieQuery,
  useGetMainInfoQuery,
  useGetCreditsQuery,
  useGetSimilarQuery,
  useLazyGetSearchQuery,
} = moviedbApi;
