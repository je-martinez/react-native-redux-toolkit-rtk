import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';
import { CounterView } from '~/src/counter/views/Counter.view';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Counter' }} />
      <Container className="bg-white">
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Counter">
          <CounterView />
        </ScreenContent>
      </Container>
    </>
  );
}
