import { Stack } from 'expo-router';

import { Container } from '~/components/shared/Container';
import { ScreenContent } from '~/components/shared/ScreenContent';
import { RecipeDetailsView } from '~/src/rtk-usage';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'RTK' }} />
      <Container className="bg-white" margin={0}>
        <ScreenContent path="app/(drawer)/(tabs)/rtk-usage.tsx">
          <RecipeDetailsView />
        </ScreenContent>
      </Container>
    </>
  );
}
