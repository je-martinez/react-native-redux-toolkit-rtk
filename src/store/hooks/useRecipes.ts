import { useGetRecipeByIdQuery, useGetRecipesQuery } from '../apis';

type Options = {
  fetchAllRecipes?: {
    fetchOnMount?: boolean;
  };
  fetchRecipeById?: {
    fetchOnMount?: boolean;
    id?: number;
  };
};

const defaultOptions: Options = {
  fetchAllRecipes: {
    fetchOnMount: true,
  },
  fetchRecipeById: {},
};

export const useRecipes = (options: Options = defaultOptions) => {
  return {
    fetchRecipes: {
      ...useGetRecipesQuery(undefined, {}),
    },
    fetchRecipeById: {
      ...useGetRecipeByIdQuery(options?.fetchRecipeById?.id ?? 0, {
        skip: !options?.fetchRecipeById?.fetchOnMount,
      }),
    },
  };
};
