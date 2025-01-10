import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';
import { RecipesView } from '~/src/rtk-usage';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'RTK' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/rtk-usage.tsx" title="RTK">
          <RecipesView />
        </ScreenContent>
      </Container>
    </>
  );
}
