import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';  
import { Provider } from 'react-redux';
import AppRoutes from './routes/Routes';
import store from '@store/store';
import client from '@graphql/apolloClient';  

export default function App() {
  return (
    <ApolloProvider client={client}>  
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}
