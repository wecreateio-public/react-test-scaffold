/** Determines if the given input is an object and has a specific property. */
export const hasProperty = <T extends unknown, K extends string>(
  input: T,
  key: K
): input is T & Record<K, unknown> =>
  !!input && typeof input === 'object' && typeof (input as Record<K, unknown>)[key] !== 'undefined';
