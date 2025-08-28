import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library.aminuldev.site/api" }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (bookId) => `/books/${bookId}`,
    }),

    createBook: builder.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: ({ bookId, ...body }) => ({
        url: `/books/${bookId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    getBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),

    createBorrow: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowQuery,
  useCreateBorrowMutation,
} = bookApi;