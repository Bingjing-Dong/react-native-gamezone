/** @format */

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="HomePage"
          component={HomeStack}
          options={{
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="AboutPage"
          component={AboutStack}
          options={{
            title: 'About',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
