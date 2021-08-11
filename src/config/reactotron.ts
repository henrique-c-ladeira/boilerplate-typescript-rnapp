import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    // eslint-disable-next-line no-undef
    tron: typeof Reactotron | { log: () => null };
  }
}

const reactotron = __DEV__
  ? Reactotron.configure().useReactNative({}).use(reactotronRedux()).connect()
  : { log: () => null, clear: () => null, createEnhancer: () => ({}) };

reactotron.clear!();

console.tron = reactotron;

export default reactotron;
