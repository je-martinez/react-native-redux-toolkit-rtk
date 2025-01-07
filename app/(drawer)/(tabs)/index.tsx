import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Counter" />
      </Container>
    </>
  );
}
