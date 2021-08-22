import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initialize } from '../screens/initialize';
import { HomeTabs } from './home-tabs';

type RootStackParamList = {
  Initialize: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Initialize" component={Initialize} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);
