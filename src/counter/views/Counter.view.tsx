import { Loader, OctagonX } from 'lucide-react-native';
import { ActivityIndicator, Text, View } from 'react-native';

import { CounterToolbox } from '../components';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useCounter } from '~/src/store';

export const CounterView: React.FC = () => {
  const { count, status, increment, decrement, incrementAsync, reset } = useCounter();

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          {status === 'loading' && (
            <ActivityIndicator size="small" color="black" className="absolute right-4 top-5" />
          )}
          <CardTitle>Counter</CardTitle>
          <CardDescription className="mt-4">
            Start using the counter to see how it works
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text>{count}</Text>
        </CardContent>
        <CardFooter>
          {status === 'failed' && (
            <View className="flex flex-row items-center gap-2">
              <OctagonX className="h-4 w-4" color="red" />
              <Text className="w-11/12 flex-wrap text-sm text-red-600">
                Oh no! Something went wrong trying to increase the count. Please try again.
              </Text>
            </View>
          )}
        </CardFooter>
      </Card>
      <CounterToolbox
        onIncrement={increment}
        onDecrement={decrement}
        onIncrementAsync={() => incrementAsync({ triggerError: false })}
        onIncrementAsyncWithError={() => incrementAsync({ triggerError: true })}
        onReset={reset}
      />
    </>
  );
};
