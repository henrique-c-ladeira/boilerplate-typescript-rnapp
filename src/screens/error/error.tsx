/* eslint-disable react-native/no-inline-styles */
import React, { ErrorInfo, useState } from 'react';
import { BackHandler, SafeAreaView, View } from 'react-native';
import { Text, Title, Button, useTheme } from 'react-native-paper';
import { CrashAnimation } from '../../components';
import { logError } from './utils/log-error';

interface Props {
  errorInfo?: ErrorInfo;
  error?: Error;
}

export const ErrorPage = ({ errorInfo, error }: Props) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const treatError = async () => {
    setLoading(true);
    await logError(error, errorInfo);
    setLoading(false);
    setMessage(
      "Thank you for sending us the report! We'll be working promptly to fix it.",
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 30,
      }}>
      <Title style={{ color: colors.text, textAlign: 'center' }}>
        Sorry, something unnexpected has occurred and we cannot recover from it.
      </Title>
      <View>
        <CrashAnimation />
        {!message && (
          <Text style={{ color: colors.text, textAlign: 'center' }}>
            Please send us the error report so we can understand more what
            happenned.
          </Text>
        )}
      </View>
      <View style={{ margin: 20 }}>
        {message ? (
          <Text style={{ color: colors.text, textAlign: 'center' }}>
            {message}
          </Text>
        ) : (
          <Button
            loading={loading}
            disabled={loading}
            icon="mail"
            mode="contained"
            onPress={treatError}>
            Send Error Report
          </Button>
        )}
        <View style={{ margin: 20 }} />
        <Button icon="close" mode="contained" onPress={BackHandler.exitApp}>
          Close App
        </Button>
      </View>
    </SafeAreaView>
  );
};
