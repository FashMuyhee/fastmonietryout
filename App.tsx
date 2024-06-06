import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'routes';
import {store} from 'redux-store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
