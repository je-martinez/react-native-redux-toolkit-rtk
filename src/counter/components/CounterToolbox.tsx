import { View, Text } from 'react-native';

import { Button } from '~/components/ui/button';

interface CounterToolboxProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
  onIncrementAsyncWithError: () => void;
  onReset: () => void;
}

export const CounterToolbox: React.FC<CounterToolboxProps> = ({
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onIncrementAsyncWithError,
  onReset,
}) => {
  return (
    <View className="mt-4 flex flex-row">
      <View className="flex flex-col gap-2">
        <Button variant="outline" onPress={onIncrement}>
          <Text>Increment</Text>
        </Button>
        <Button variant="outline" onPress={onDecrement}>
          <Text>Decrement</Text>
        </Button>
        <Button variant="outline" onPress={onIncrementAsync}>
          <Text>Increment Async</Text>
        </Button>
        <Button variant="outline" className="border-red-300" onPress={onIncrementAsyncWithError}>
          <Text className="text-red-600">Increment Async (w/ Error)</Text>
        </Button>
        <Button variant="outline" onPress={onReset}>
          <Text>Reset</Text>
        </Button>
      </View>
    </View>
  );
};
