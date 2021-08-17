import React from 'react';
import { SafeAreaView } from 'react-native';
import { Switch, List, useTheme } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggle, toggleAsync } from '../../store/modules/theme';

export const Settings = () => {
  const { colors } = useTheme();
  const isSwitchOn = useAppSelector(state => state.theme === 'dark');
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <List.Section>
        <List.Subheader>Theme</List.Subheader>
        <List.Item
          title="Dark mode"
          right={() => (
            <Switch
              value={isSwitchOn}
              onValueChange={() => {
                dispatch(toggle());
              }}
            />
          )}
        />
        <List.Item
          title="Dark mode Async"
          right={() => (
            <Switch
              value={isSwitchOn}
              onValueChange={() => {
                dispatch(toggleAsync());
              }}
            />
          )}
        />
      </List.Section>
    </SafeAreaView>
  );
};
