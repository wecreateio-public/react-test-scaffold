import { InMemoryCache } from '@apollo/experimental-nextjs-app-support';

import possibleTypes from 'lib/graphql/generated/possibleTypes.json';
import typePolicies from 'lib/graphql/typePolicies';

/** Create a configured React Client Component cache for the Apollo Client. */
export const createCache = () =>
  new InMemoryCache({
    ...possibleTypes,
    typePolicies,
    // The id already includes the type name, so we can use it as primary key for cache normalization.
    dataIdFromObject: ({ id }) => (id ? String(id) : undefined),
  });
