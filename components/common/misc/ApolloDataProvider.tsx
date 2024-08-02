'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

import { useConst } from 'hooks/useConst';
import { createApolloClient } from 'lib/apollo';

/** Provides context for the Apollo Client with support for the Next.js App router */
export const ApolloDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { GATEWAY_URL } = useConst();
  return (
    <ApolloNextAppProvider makeClient={() => createApolloClient(GATEWAY_URL)}>
      {children}
    </ApolloNextAppProvider>
  );
};
