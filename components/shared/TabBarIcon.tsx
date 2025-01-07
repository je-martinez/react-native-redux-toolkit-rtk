import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export const TabBarIcon = (props: {
  icon: React.ReactNode;
  color: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={[styles.tabBarIcon, props.style]}>{props.icon}</View>;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
