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
    fetchOnMount: false,
  },
  fetchRecipeById: {
    fetchOnMount: false,
  },
};

export const useRecipes = (options: Options = defaultOptions) => {
  return {
    fetchRecipes: {
      ...useGetRecipesQuery(undefined, {
        skip: !options?.fetchAllRecipes?.fetchOnMount,
      }),
    },
    fetchRecipeById: {
      ...useGetRecipeByIdQuery(options?.fetchRecipeById?.id ?? 0, {
        skip: !options?.fetchRecipeById?.fetchOnMount,
      }),
    },
  };
};
