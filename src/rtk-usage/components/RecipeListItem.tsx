import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { blurhash } from './constants';

import { Rating } from '~/components/shared/Rating';
import { NativeWindExpoImage } from '~/src/ui';

interface RecipeListItemProps {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  rating: number;
}

const Component: React.FC<RecipeListItemProps> = ({ id, name, image, difficulty, rating }) => {
  return (
    <Link href={`/rtk/recipe-details?id=${id}`} asChild>
      <TouchableOpacity className="w-12/12 flex flex-row items-center gap-4">
        <View>
          <NativeWindExpoImage
            source={image}
            placeholder={{ blurhash }}
            className="h-20 w-20 rounded-lg"
            contentFit="cover"
            transition={1000}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <Text className="text-lg font-bold">{name}</Text>
          <Text className="text-sm text-muted-foreground">{difficulty}</Text>
          <View className="my-1">
            <Rating rating={rating} />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export const RecipeListItem = React.memo(Component);
