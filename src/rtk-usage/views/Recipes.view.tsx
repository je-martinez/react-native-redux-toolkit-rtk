import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export const RecipesView: React.FC = () => {
  return (
    <View>
      <Link href="/rtk/recipe-details" asChild>
        <TouchableOpacity>
          <Text>RecipesExample</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
