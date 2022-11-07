import { useMemo } from 'react';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { initializeApollo } from 'lib/apollo';

type Props = {
  /** The initial state of the Apollo Client cache (from SSR) */
  state?: NormalizedCacheObject;
};

/**
 * Provides context for the Apollo Client, handles access token updates and initializes the messaging
 * connection for chats and notifications.
 */
export const DataProvider: React.FC<Props> = ({ state, children }) => {
  const apolloClient = useMemo(() => initializeApollo(state), [state]);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
