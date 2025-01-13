import '../global.css';

import { Stack } from 'expo-router';
import { remapProps } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StoreProvider } from '~/src/store';
import { NativeWindExpoImage } from '~/src/ui';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

remapProps(NativeWindExpoImage, {
  className: 'style',
});

export default function RootLayout() {
  return (
    <StoreProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
        </Stack>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}
