import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/two.tsx" title="Tab Two" />
      </Container>
    </>
  );
}
