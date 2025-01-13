import { StarHalfIcon, StarIcon } from 'lucide-react-native';
import { useMemo } from 'react';
import { View, Text } from 'react-native';

export const Rating = ({ rating }: { rating: number }) => {
  const numberOfStars = useMemo(() => {
    return Array.from({ length: Math.trunc(rating) }, (_, index) => index + 1);
  }, [rating]);

  const hasHalfStar = useMemo(() => {
    return rating % 1 !== 0;
  }, [rating]);

  return (
    <View className="flex flex-row items-center gap-1">
      {numberOfStars.map((star) => (
        <StarIcon key={star} size={16} color="gold" />
      ))}
      {hasHalfStar && <StarHalfIcon size={16} color="gold" />}
      <Text className="text-gold text-sm font-bold">({rating})</Text>
    </View>
  );
};
