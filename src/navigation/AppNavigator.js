import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EatsScreen from '../screens/EatsScreen';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';
import MapScreen from '../screens/MapScreen';
import animation from '../screens/animation';

const Stack = createStackNavigator();
const config = {
  screens: {
    Map: {
      path: 'map/:message',
      parse: {
        message: message => `${message}`,
      },
    },
    NavOptions: 'c',
  },
};
const linking = {
  prefixes: ['demo://app'],
  config,
};
const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AnimatedScreen" component={animation} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="EatsScreen" component={EatsScreen} />
        <Stack.Screen name="NavOptions" component={NavOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//npx uri-scheme open demo://app/map/Banglore  --android
export default AppNavigator;
