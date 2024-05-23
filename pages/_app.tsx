import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { NextComponentType } from 'next';
import { createTheme } from 'lib/theme';
import { DataProvider } from 'components/common/misc';
import App, { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { Welcome } from '../components/view/welcome/Welcome';

type Props = {
  expectDesktop?: boolean;
};

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  pageProps,
  expectDesktop,
}: AppLayoutProps & Props) => {
  return (
    <ThemeProvider theme={createTheme(expectDesktop)}>
      <DataProvider state={pageProps.initialApolloState}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <title>WeCreate UI Scaffold </title>
        </Head>
        <CssBaseline />
        <Welcome />
      </DataProvider>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps & Props> => {
  const initialProps = await App.getInitialProps(appContext);

  // Skip when invoking `getServerSideProps` from the client-side.
  if (appContext.ctx.req?.url?.startsWith('/_next/data/')) return { ...initialProps };

  // Skip when invoking `getStaticProps` on error pages.
  if (['/_error', '/404'].includes(appContext.router.pathname)) return { ...initialProps };

  const expectDesktop = !appContext.ctx.req?.headers['user-agent']?.includes('Mobi');

  return {
    ...initialProps,
    expectDesktop,
  };
};

export default MyApp;
