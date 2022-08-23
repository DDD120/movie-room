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
    email: builder.mutation({
      query: (body) => ({
        url: "user/email",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "user/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useEmailMutation, useSignupMutation } =
  serverApi;
