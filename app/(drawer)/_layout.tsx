import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Home, Menu } from 'lucide-react-native';

import { HeaderButton } from '../../components/shared/HeaderButton';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Home size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Features',
        drawerLabel: 'Features',
        drawerIcon: ({ size, color }) => <Menu size={size} color={color} />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
