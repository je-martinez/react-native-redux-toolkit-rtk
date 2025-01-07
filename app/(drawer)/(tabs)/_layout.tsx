import { Tabs } from 'expo-router';
import { CopyPlusIcon, Server } from 'lucide-react-native';

import { TabBarIcon } from '~/components/shared/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Counter',
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={<CopyPlusIcon color={color} />} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rtk-usage"
        options={{
          title: 'RTK',
          tabBarIcon: ({ color }) => <TabBarIcon icon={<Server color={color} />} color={color} />,
        }}
      />
    </Tabs>
  );
}
