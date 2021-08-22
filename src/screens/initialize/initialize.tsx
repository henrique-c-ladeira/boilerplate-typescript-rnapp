import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Loading } from '../../components';
import { useAppDispatch } from '../../hooks';
import { useAppNavigation } from '../../hooks/navigation';
import { getThemeAsync } from '../../store/modules/theme';

export const Initialize = () => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const navigation = useAppNavigation();

  useEffect(() => {
    (async () => {
      dispatch(getThemeAsync());
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('Home');
    })();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Loading />
    </SafeAreaView>
  );
};
