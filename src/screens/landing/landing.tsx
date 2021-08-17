import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

interface Props {
  navigation: any;
}

export const LandingPage = ({ navigation }: Props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Button
        icon="ghost"
        mode="contained"
        onPress={() => navigation.jumpTo('Settings')}>
        Press me
      </Button>
    </SafeAreaView>
  );
};
