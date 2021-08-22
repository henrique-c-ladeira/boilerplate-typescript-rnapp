import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { LandingPage } from '../screens/landing';
import { Settings } from '../screens/settings';
import { RootTabParamList } from '../@types/navigation';

const BottomTab = createMaterialBottomTabNavigator<RootTabParamList>();

export const HomeTabs = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Landing"
      component={LandingPage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="blur-circular" color={color} size={26} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="settings" color={color} size={26} />
        ),
      }}
    />
  </BottomTab.Navigator>
);
