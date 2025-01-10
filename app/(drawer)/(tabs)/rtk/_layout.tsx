import { Stack, usePathname } from 'expo-router';

export default function RTKLayout() {
  const route = usePathname();

  console.log(route);

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="recipe-details" options={{ headerShown: false, presentation: 'modal' }} />
    </Stack>
  );
}
