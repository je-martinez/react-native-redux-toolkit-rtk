import React from 'react';
import { Text, View } from 'react-native';
import { Rating } from '~/components/shared/Rating';

import { NativeWindExpoImage } from '~/src/ui';

interface RecipeListItemProps {
  name: string;
  image: string;
  difficulty: string;
  rating: number;
}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Component: React.FC<RecipeListItemProps> = ({ name, image, difficulty, rating }) => {
  return (
    <View className="w-12/12 flex flex-row items-center gap-4">
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
    </View>
  );
};

export const RecipeListItem = React.memo(Component);
