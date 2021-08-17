import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { LandingPage } from '../screens/landing';
import { Settings } from '../screens/settings';

type RootStackParamList = {
  Landing: undefined;
  Settings: undefined;
};

const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="blur-circular" color={color} size={26} />
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
