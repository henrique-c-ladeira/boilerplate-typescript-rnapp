/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { Switch, LightBulb } from '../../components';

interface Props {
  navigation: any;
}

export const LandingPage = ({ navigation }: Props) => {
  const [enabled, setEnabled] = useState(true);
  const { colors } = useTheme();
  const [errorThrown, setErrorThrown]: any = useState({ message: 'Crash' });
  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Button
        icon="ghost"
        mode="contained"
        onPress={() => navigation.jumpTo('Settings')}>
        Press me
      </Button>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <LightBulb enabled={enabled} />
        <Switch enabled={enabled} onPress={() => setEnabled(!enabled)} />
        <Button
          icon="death-star-variant"
          mode="contained"
          onPress={() => {
            setErrorThrown(undefined);
          }}>
          {errorThrown.message}
        </Button>
      </View>
    </SafeAreaView>
  );
};
