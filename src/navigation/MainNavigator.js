import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';
import {KeyboardAvoidingView, Platform} from 'react-native';

const Stack = createStackNavigator();


const MainNavigator = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
      >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="EatsScreen" component={EatsScreen} />
        <Stack.Screen name="MapOptions" component={NavOptions} />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};
export const config={
  screens:{
      HoHomeScreen:"home",
      MapScreen:"maps",
      NavOptions:"mapsoptions"
  }
}
export default MainNavigator;
