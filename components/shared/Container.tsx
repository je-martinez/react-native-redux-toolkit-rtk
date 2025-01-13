import { SafeAreaView, View } from 'react-native';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <SafeAreaView className={[styles.container, className].join(' ')}>
      <View className="m-6 flex-1">{children}</View>
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1',
};
