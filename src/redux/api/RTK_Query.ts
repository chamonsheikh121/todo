import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const base_api = createApi({
  reducerPath: "task_api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes:["Tasks"],
  endpoints: (build) => ({
    get_task: build.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    create_task: build.mutation({
      query: (task_data) => ({
        url: "/tasks",
        method: "POST",
        body: task_data,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useGet_taskQuery, useCreate_taskMutation } = base_api;
