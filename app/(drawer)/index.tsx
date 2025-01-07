import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';
import { HomeView } from '~/src/home/views';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/(drawer)/index.tsx">
          <HomeView />
        </ScreenContent>
      </Container>
    </>
  );
}
