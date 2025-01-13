import { SafeAreaView, View } from 'react-native';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  margin?: number;
}
export const Container = ({ children, className, margin = 6 }: ContainerProps) => {
  return (
    <SafeAreaView className={[styles.container, className].join(' ')}>
      <View className={`m-${margin} flex-1`}>{children}</View>
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1',
};
