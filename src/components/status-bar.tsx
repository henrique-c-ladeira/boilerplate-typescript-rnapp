import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { useAppSelector } from '../hooks';
import { selectTheme } from '../store/modules/theme';

export const StatusBar = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <RNStatusBar
      backgroundColor={theme === 'light' ? 'white' : 'black'}
      barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
    />
  );
};
