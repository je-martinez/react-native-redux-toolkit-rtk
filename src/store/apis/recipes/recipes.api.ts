import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '~/src/store/apis/axios.base-query';
import { RecipesGetAllResponse, RecipesGetByIdResponse } from '~/src/types';

type RequestOptions = {
  delay?: number;
};

export const recipesStoreApi = createApi({
  reducerPath: 'recipesStoreApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getRecipes: builder.query<RecipesGetAllResponse, RequestOptions>({
      query: ({ delay }) => ({ url: '/', method: 'GET', delay }),
    }),
    getRecipeById: builder.query<RecipesGetByIdResponse, { id: number; delay?: number }>({
      query: ({ id, delay }) => ({ url: `/${id}`, method: 'GET', delay }),
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipesStoreApi;
