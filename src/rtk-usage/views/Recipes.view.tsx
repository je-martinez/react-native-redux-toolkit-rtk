import { FlashList } from '@shopify/flash-list';
import { useCallback, useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';

import { RecipeListItem } from '../components';

import { useRecipes } from '~/src/store';
import { Recipe } from '~/src/types';

export const RecipesView: React.FC = () => {
  const { height } = useWindowDimensions();

  const {
    fetchRecipes: { data, isLoading, error },
  } = useRecipes();

  const recipes = useMemo(() => data?.recipes ?? [], [data]);

  const keyExtractor = useCallback((item: Recipe) => item.id.toString(), []);

  const renderItem = useCallback(({ item }: { item: Recipe }) => {
    return (
      <RecipeListItem
        name={item.name}
        image={item.image}
        difficulty={item.difficulty}
        rating={item.rating}
      />
    );
  }, []);

  const renderItemSeparator = useCallback(() => {
    return <View className="h-4" />;
  }, []);

  return (
    <View className="w-full" style={{ height: height * 0.7 }}>
      <FlashList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
        numColumns={1}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </View>
  );
};
