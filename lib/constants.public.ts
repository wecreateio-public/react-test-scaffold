// Holds constants which are available for server side as well as for client side, but not in middleware/edge.

/** We always want to add those properties to external links for security and SEO reasons. */
export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener nofollow',
} as const;
/** The height of the mobile navigation must be constant so that other components can adjust their positions. */
export const MOBILE_NAV_HEIGHT = 56;
export const WEBSITE_URL = 'https://about.wecreate.world';
/** Tells if running on the server side. */
export const isServerSide = typeof window === 'undefined';
/** Tells if running in `production` mode */
export const inProductionEnv = process.env.NODE_ENV === 'production';
/** Tells if running in `development` mode */
export const inDevelopmentEnv = process.env.NODE_ENV === 'development';
/** Tells if running in `test` mode */
export const inTestEnv = process.env.NODE_ENV === 'test';

export type PublicConstants = ReturnType<typeof createConstants>;
/**
 * Creates constants which based on `NEXT_PUBLIC_` and `DYNAMIC_NEXT_PUBLIC_` env variables.
 * @param envData the modified/injected `NEXT_PUBLIC_` or `DYNAMIC_NEXT_PUBLIC_` env variables to override the inlined ones.
 */
const createConstants = (envData: { [envName: string]: string }) => {
  const appUrl = trimTrailingSlash(
    getOrEnv('DYNAMIC_NEXT_PUBLIC_APP_URL', envData) || 'https://www.wecreate.world'
  );
  const defaults = getDefaultConstants();
  const updates = {
    APP_NAME: getOrEnv('DYNAMIC_NEXT_PUBLIC_APP_NAME', envData),
    /** The root url */
    APP_URL: appUrl || defaults.APP_URL,
    GATEWAY_URL: getOrEnv('NEXT_PUBLIC_GATEWAY_URL', envData) || 'https://graph.dev.we-create.io/graphql',
  };
  return mergeObjects(defaults, updates);
};

export const getDefaultConstants = () => {
  const appUrl = trimTrailingSlash('https://www.dev.we-create.io');
  return {
    APP_URL: appUrl,
    GATEWAY_URL: 'https://graph.dev.we-create.io/graphql',
  } as const;
};

/**
 * Returns the specified env variable either from the given overrides or from `process.env`
 * @param envKey the name of the env variable
 * @param envOverrides overridden env variables, most likely injected `NEXT_PUBLIC_` and `DYNAMIC_NEXT_PUBLIC_` ones.
 * @returns the env value either from the overrides or from `process.env`
 */
const getOrEnv = (envKey: string, envOverrides: { [envName: string]: string }): string | undefined =>
  envOverrides[envKey] || process.env[envKey];

export const mergeObjects = <T extends { [key: string]: string | number | boolean | undefined }>(
  defaultObject: { [key: string]: string | number | boolean },
  updateObject: Partial<T>
): T => {
  const defaultValues = { ...defaultObject };
  Object.entries(updateObject).forEach(([key, value]) => {
    if (value !== undefined) {
      defaultValues[key] = value;
    }
  });
  return defaultValues as T;
};

export const trimTrailingSlash = <T extends string | undefined>(toTrim: T): T =>
  (toTrim ? (toTrim.endsWith('/') ? toTrim.substring(0, toTrim.length - 1) : toTrim) : undefined) as T;

/** To avoid the performance loss on server side, we create the constants once and share them globally */
let constants: PublicConstants | undefined = undefined;
/**
 * Return the parsed and prepared public constants. If they don't exist yet, they will be created with the given raw data.
 * Also, additional initialization steps based on these constants will be taken. Should be invoked as early as possible at both,
 * the client and the server side.
 */
export const initConstantsIfAbsent = (rawEnvData: string): PublicConstants => {
  if (!constants) {
    constants = createConstants(JSON.parse(rawEnvData));
  }
  return constants;
};
