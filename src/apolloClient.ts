import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.log(
      `[Network error ${operation.operationName}]: ${networkError.message}`
    );
  }
});

export const createClient = () => {
  const httpLink = new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://react-adobe-color-clone.herokuapp.com/graphql'
        : 'http://localhost:4000/graphql',
    credentials: 'include'
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('jwtToken');

    return {
      headers: {
        ...headers,
        authorization: token ? token : ''
      }
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink])
  });

  return client;
};
