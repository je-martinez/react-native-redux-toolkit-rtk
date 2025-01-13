import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { CookingPot, ForkKnife, ChefHat } from 'lucide-react-native';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';

import { Rating } from '~/components/shared/Rating';
import { useRecipes } from '~/src/store';

export const RecipeDetailsView: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const {
    fetchRecipeById: { data, isLoading, error },
  } = useRecipes({
    fetchRecipeById: {
      fetchOnMount: true,
      id: Number(id),
    },
  });

  const {
    image,
    name,
    rating,
    prepTimeMinutes,
    servings,
    cookTimeMinutes,
    ingredients,
    instructions,
  } = data || {};

  return (
    <ScrollView>
      <Image source={image} style={{ width, height: height * 0.5 }} />
      <Text className="my-4 text-center text-2xl font-bold">{name}</Text>
      <View className="m-4 flex flex-row">
        <View className="w-6/12 items-center">
          <View className="my-2 flex flex-row items-center gap-4">
            <Rating rating={rating ?? 0} />
          </View>
          <View className="my-2 flex flex-row items-center gap-4">
            <CookingPot color="black" size={16} />
            <Text className="text-base">Prep: {prepTimeMinutes} mins</Text>
          </View>
        </View>
        <View className="w-6/12 items-center">
          <View className="my-2 flex flex-row items-center gap-4">
            <ForkKnife color="black" size={16} />
            <Text className="text-base">Servings: {servings}</Text>
          </View>
          <View className="flex flex-row items-center gap-4">
            <ChefHat color="black" size={16} />
            <Text className="text-base">Cook: {cookTimeMinutes} mins</Text>
          </View>
        </View>
      </View>
      <View className="m-8 mt-2">
        <Text className="mb-2 text-xl font-bold">Ingredients</Text>
        <View className="flex flex-col flex-wrap">
          {ingredients?.map((ingredient) => (
            <Text key={ingredient} className="text-base">
              {ingredient}
            </Text>
          ))}
        </View>
      </View>
      <View className="m-8 mt-0">
        <Text className="mb-2 text-xl font-bold">Instructions</Text>
        {instructions?.map((instruction, index) => (
          <>
            <Text key={instruction} className="text-base">
              {index + 1}. {instruction}
            </Text>
          </>
        ))}
      </View>
    </ScrollView>
  );
};
