import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '~/src/store/apis/axios.base-query';
import { RecipesGetAllResponse, RecipesGetByIdResponse } from '~/src/types';

export const recipesStoreApi = createApi({
  reducerPath: 'recipesStoreApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getRecipes: builder.query<RecipesGetAllResponse, void>({
      query: () => ({ url: '/', method: 'GET' }),
    }),
    getRecipeById: builder.query<RecipesGetByIdResponse, number>({
      query: (id) => ({ url: `/${id}`, method: 'GET' }),
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipesStoreApi;
