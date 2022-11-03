import { RenderOptions, render, act } from '@testing-library/react';
import { ParsedUrlQuery } from 'querystring';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'; // https://github.com/storybookjs/storybook/issues/24234#issuecomment-1726353377
import { ThemeProvider } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';

import { createTheme } from 'lib/theme';
import { routerBack, routerPush, routerReplace } from './variables';
import { i18n } from './i18n';

export const TestingContext: React.FC<{
  path?: string;
  query?: ParsedUrlQuery;
  children?:React.ReactNode;
}> = ({ children, path = '/', query = {} }) => (
  <RouterContext.Provider
    value={
      {
        locale: 'en',
        locales: ['en', 'de'],
        pathname: path,
        route: path,
        query: query,
        asPath: path,
        events: {
          on: jest.fn(),
          off: jest.fn(),
          emit: jest.fn(),
        },
        back: routerBack,
        push: routerPush,
        replace: routerReplace,
      } as any
    }
  >
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </I18nextProvider>
  </RouterContext.Provider>
);

export const renderWithContext = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: TestingContext, ...options });

export const renderBeforeEach = (ui: React.ReactElement, options?: RenderOptions) =>
  beforeEach(async () => {
    await act(async () => {
      renderWithContext(ui, options);
    });
  });
