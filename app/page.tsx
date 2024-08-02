'use client';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../lib/theme';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { Welcome } from '../components/view/welcome/Welcome';

export default function Page() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>WeCreate UI Scaffold </title>
      </Head>
      <CssBaseline />
      <Welcome />
    </ThemeProvider>
  );
}
