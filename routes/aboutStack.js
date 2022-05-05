/** @format */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
