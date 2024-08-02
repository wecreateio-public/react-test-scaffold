import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { onError } from '@apollo/client/link/error';

/** A custom link with our error handling. */
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations?.toString()}, Path: ${path?.toString()}`
      )
    );
  if (networkError) console.error(`[Network error]: ${networkError?.toString()}`);
});

/** A custom HTTP link. */
export const createHttpLink = (gatewayUrl: string) =>
  new BatchHttpLink({
    uri: gatewayUrl,
    credentials: 'same-origin',
  });
