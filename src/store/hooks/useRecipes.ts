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
  fetchRecipeById: {
    fetchOnMount: false,
  },
};

export const useRecipes = (options: Options = defaultOptions) => {
  const {
    data,
    isLoading,
    error,
    refetch: refetchRecipes,
  } = useGetRecipesQuery(undefined, {
    skip: !options?.fetchAllRecipes?.fetchOnMount,
  });

  const {
    data: recipeById,
    isLoading: isLoadingRecipeById,
    error: errorRecipeById,
    refetch: refetchRecipeById,
  } = useGetRecipeByIdQuery(options?.fetchRecipeById?.id ?? 0, {
    skip: !options?.fetchRecipeById?.fetchOnMount,
  });

  return {
    fetchRecipes: {
      data,
      isLoading,
      error,
      refetch: refetchRecipes,
    },
    fetchRecipeById: {
      data: recipeById,
      isLoading: isLoadingRecipeById,
      error: errorRecipeById,
      refetch: refetchRecipeById,
    },
  };
};
