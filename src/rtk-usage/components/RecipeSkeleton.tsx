import { useWindowDimensions, View } from 'react-native';

import { Skeleton } from '~/components/ui/skeleton';

export const RecipeSkeleton: React.FC = () => {
  const { height } = useWindowDimensions();

  return (
    <View className="h-full w-full">
      <View className="h-2/6 w-full" style={{ height: height * 0.5 }}>
        <Skeleton className="h-full w-full rounded-none" />
      </View>
      <View>
        <Skeleton className="w-3/2 mx-5 mt-4 h-8" />
      </View>
      <View className="flex flex-row">
        <View className="w-6/12">
          <Skeleton className="w-3/2 mx-5 mt-8 h-8" />
          <Skeleton className="w-3/2 mx-5 mt-4 h-8" />
        </View>
        <View className="w-6/12">
          <Skeleton className="w-3/2 mx-5 mt-8 h-8" />
          <Skeleton className="w-3/2 mx-5 mt-4 h-8" />
        </View>
      </View>
      <View>
        <Skeleton className="mx-5 mt-4 h-8 w-1/2" />
        <Skeleton className="mx-5 mt-2 h-5 w-4/12" />
        <Skeleton className="mx-5 mt-2 h-5 w-6/12" />
        <Skeleton className="mx-5 mt-2 h-5 w-3/12" />
        <Skeleton className="mx-5 mt-2 h-5 w-7/12" />
        <Skeleton className="mx-5 mt-2 h-5 w-2/12" />
        <Skeleton className="mx-5 mt-2 h-5 w-6/12" />
      </View>
    </View>
  );
};
