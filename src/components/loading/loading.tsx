import React from 'react';
import Lottie from 'lottie-react-native';
import { View } from 'react-native';

import loadingUri from './assets/loading.json';
import { LoadingProps } from './loading.types';

export const Loading = ({}: LoadingProps) => {
  return (
    <View>
      <Lottie source={loadingUri} style={{ height: 450 }} loop autoPlay />
    </View>
  );
};
