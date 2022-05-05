/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackground: () => (
          <Image
            style={{ height: '100%' }}
            source={require('../assets/game_bg.png')}
          />
        ),
        headerTintColor: '#444',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
}
