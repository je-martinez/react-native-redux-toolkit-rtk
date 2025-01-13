import { Text, View } from 'react-native';

type ScreenContentProps = {
  title?: string;
  path?: string;
  children?: React.ReactNode;
  className?: string;
};

export const ScreenContent = ({ title, children, className }: ScreenContentProps) => {
  return (
    <View className={[styles.container, className].join(' ')}>
      {title && (
        <>
          <Text className={styles.title}>{title}</Text>
          <View className={styles.separator} />
        </>
      )}
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center w-full`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
