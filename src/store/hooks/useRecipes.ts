import { useGetRecipesQuery } from '../apis';

type Options = {
  fetchOnMount?: boolean;
};

export const useRecipes = (options?: Options) => {
  const { data, isLoading, error } = useGetRecipesQuery(undefined, {
    skip: !options?.fetchOnMount,
  });

  return {
    fetchRecipes: {
      data,
      isLoading,
      error,
    },
  };
};
