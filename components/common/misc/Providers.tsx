'use client';

import { NormalizedCacheObject } from '@apollo/client';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

import { EnvValuesProvider } from 'context/envValues';
import { initConstantsIfAbsent } from 'lib/constants.public';
import { createTheme } from 'lib/theme';
import createEmotionCache from 'util/style';
import { ApolloDataProvider } from './ApolloDataProvider';

type Props = {
  expectDesktop?: boolean;
  accessToken?: string;
  initialApolloState?: { id: string; cache: NormalizedCacheObject };
  children: React.ReactNode;
  envData: string;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const Providers: React.FC<Props> = ({ children, envData }: Props) => {
  return (
    <EnvValuesProvider value={initConstantsIfAbsent(envData)}>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={createTheme()}>
          <ApolloDataProvider>{children}</ApolloDataProvider>
        </ThemeProvider>
      </CacheProvider>
    </EnvValuesProvider>
  );
};

export default Providers;
