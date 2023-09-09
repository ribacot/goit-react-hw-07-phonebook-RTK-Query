import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64fa2e8c4098a7f2fc1570fd.mockapi.io/api/v1/',
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: (value = '') => `/contacts?filter=${value}&sortBy=name`,
      providesTags: ['POST', 'DELETE'],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['POST'],
    }),
    delContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['DELETE'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDelContactMutation,
} = contactsApi;
