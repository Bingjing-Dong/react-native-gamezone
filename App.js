/** @format */
import 'react-native-gesture-handler';
import Home from './screens/home';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import DrawerNavigator from './routes/drawer';

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <DrawerNavigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    );
  }
}
