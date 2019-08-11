import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle } from './utils/styles';
import { createClient } from './apolloClient';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { AuthProvider, useAuthState } from './context/authContext';
import { Spinner } from './components/Spinner/Spinner';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

const client = createClient();

const Index: React.FC = () => {
  const { isAuth } = useAuthState();

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <GlobalStyle />
        <Suspense fallback={<Spinner />}>
          {isAuth === null && <Spinner />}
          {isAuth === false && <UnauthApp />}
          {isAuth && <AuthApp />}
        </Suspense>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <AuthProvider>
    <Index />
  </AuthProvider>,
  document.getElementById('root')
);
