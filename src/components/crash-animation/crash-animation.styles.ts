import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import lottieUri from './assets/crash-animation.json';

export const LottieContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LottieSource = styled(Lottie).attrs({
  source: lottieUri,
  autoPlay: true,
  loop: true,
})`
  height: 250px;
`;
