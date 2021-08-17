if (__DEV__) {
  import('./src/config/reactotron').then(() =>
    console.tron.log!('Reactotron Configured. Running in *DEBUG* Mode.'),
  );
}
import React from 'react';
import { Routes } from './src/routes';
import { PaperProvider } from './src/providers';
import { StatusBar } from './src/components/status-bar';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
