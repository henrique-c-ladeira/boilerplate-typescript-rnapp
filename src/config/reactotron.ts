import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    // eslint-disable-next-line no-undef
    tron: typeof Reactotron | { log: () => null };
  }
}

const reactotron = __DEV__
  ? Reactotron.setAsyncStorageHandler!(AsyncStorage)
      .configure()
      .use(sagaPlugin({}))
      .useReactNative({})
      .use(reactotronRedux())
      .connect()
  : {
      log: () => null,
      clear: () => null,
      createEnhancer: undefined,
      createSagaMonitor: () => undefined,
    };

reactotron.clear!();

console.tron = reactotron;

export default reactotron;
