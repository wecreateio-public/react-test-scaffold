'use client';

import { createContext } from 'react';

import { PublicConstants } from 'lib/constants.public';

/** Holds environment variables */
export const EnvValuesContext = createContext<PublicConstants>({} as PublicConstants);

export const EnvValuesProvider = EnvValuesContext.Provider;
