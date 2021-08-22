import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';
import { TouchableOpacity, View } from 'react-native';

import switchUri from './assets/switch.json';
import { SwitchProps } from './switch.types';

export const Switch = ({ enabled, onPress }: SwitchProps) => {
  const ref = useRef<Lottie>();
  const notAnimate = useRef(true);

  useEffect(() => {
    const animation = ref.current;
    enabled ? animation!.play(60, 60) : animation!.play(29, 29);
  }, []);

  useEffect(() => {
    if (!notAnimate.current) {
      const animation = ref.current;
      enabled ? animation!.play(29, 60) : animation!.play(0, 29);
    }
    notAnimate.current = false;
  }, [enabled]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Lottie
          ref={ref}
          source={switchUri}
          style={{ height: 50 }}
          loop={false}
        />
      </View>
    </TouchableOpacity>
  );
};
