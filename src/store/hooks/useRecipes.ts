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
      ...useGetRecipesQuery(
        {
          delay: 5000,
        },
        {
          skip: !options?.fetchAllRecipes?.fetchOnMount,
        }
      ),
    },
    fetchRecipeById: {
      ...useGetRecipeByIdQuery(
        {
          id: options?.fetchRecipeById?.id ?? 0,
          delay: 2000,
        },
        {
          skip: !options?.fetchRecipeById?.fetchOnMount,
        }
      ),
    },
  };
};
