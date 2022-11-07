import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { onError } from '@apollo/client/link/error';

/** A custom link with our error handling. */
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

/** A custom HTTP link. */
export const httpLink = new BatchHttpLink({
  uri: process.env.NEXT_PUBLIC_GATEWAY_URL,
});
