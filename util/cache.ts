import uniqBy from 'lodash/uniqBy';

import { hasProperty } from 'util/type';

/** Filters duplicate edges by looking at their node IDs (or refs). */
export const mergeUniqueEdges = (edges: unknown[]) => {
  let edgesAreComparable = true;

  const comparedEdges = uniqBy(edges, (item) => {
    if (hasProperty(item, 'node')) {
      // With cache normalization.
      if (hasProperty(item.node, '__ref')) return item.node.__ref;

      // Without cache normalization.
      if (hasProperty(item.node, 'id')) return item.node.id;
    }

    edgesAreComparable = false;
  });

  return edgesAreComparable ? comparedEdges : edges;
};
