import { Platform } from 'react-native';
import { css } from 'styled-components';
import { theme } from '../theme';

const { fonts } = theme;

type WeightType = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type WeightIndexType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const parseFont: WeightType = {
  100: fonts.thin,
  200: fonts.extraLight,
  300: fonts.light,
  400: fonts.regular,
  500: fonts.medium,
  600: fonts.semiBold,
  700: fonts.bold,
  800: fonts.extraBold,
  900: fonts.black,
};

export const defaultFont = (weight: WeightIndexType) => css`
  font-family: ${Platform.OS === 'ios' ? fonts.name : parseFont[weight]};
  ${Platform.OS === 'ios' && `font-weight: ${weight};`}
`;
