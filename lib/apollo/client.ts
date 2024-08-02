'use client';
import { ApolloLink } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { ApolloClient, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support';

import { createCache } from 'lib/apollo/cache';
import { createHttpLink, errorLink } from 'lib/apollo/link';
import { inDevelopmentEnv, inProductionEnv } from '../constants.public';

if (!inProductionEnv) {
  // In dev mode, display the full error messages directly in the console - we don't care about bundle size
  loadDevMessages();
  loadErrorMessages();
}

/** Creates a custom Apollo Client. It is used on the client-side and supports SSR. */
export const createApolloClient = (gatewayUrl: string) =>
  new ApolloClient({
    // the server-side client's authentication needs to be determined for each request
    link: ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      errorLink,
      createHttpLink(gatewayUrl),
    ]),
    cache: createCache(),
    defaultOptions: {
      watchQuery: {
        /**
         * When running client-side always fetch the latest data on the initial query and watch the cache when
         * refetching the same query.
         *
         * https://github.com/apollographql/apollo-client/issues/6760#issuecomment-668188727
         */
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
      },
    },
    // Allow SSR prefetching when using `network-only` fetch policy.
    ssrForceFetchDelay: 100,
    connectToDevTools: inDevelopmentEnv,
  });
