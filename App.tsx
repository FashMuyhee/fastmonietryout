import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'routes';
import {store} from 'redux-store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toast />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
