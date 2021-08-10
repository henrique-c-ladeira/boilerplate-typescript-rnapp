import React, { ReactNode } from 'react';
import { DefaultTheme, DarkTheme, Provider } from 'react-native-paper';
import { useAppSelector } from '../hooks';
import { selectTheme } from '../store/modules/theme';

export const PaperProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <Provider theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      {children}
    </Provider>
  );
};
