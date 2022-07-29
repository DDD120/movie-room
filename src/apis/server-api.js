import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "user/signin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = serverApi;
