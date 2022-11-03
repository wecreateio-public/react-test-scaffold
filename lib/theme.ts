import { alpha, createTheme as createMuiTheme} from '@mui/material/styles';
import mediaQuery from 'css-mediaquery';
import { generateTypography } from '../util/theme';

export const SCALING_FACTOR = 8;
export const SCALING_UNIT = 'px';
export const MOBILE_NAV_HEIGHT = 56;

/** Create our custom Material UI theme. */
export const createTheme = (expectDesktop = false) => {
  const breakpoints = createMuiTheme({}).breakpoints;
  const theme = createMuiTheme({
    spacing: (factor: number) => `${SCALING_FACTOR * factor}${SCALING_UNIT}`,
    mixins: {
      truncateText: {
        '&, & *': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      },
    },
    typography: {
      fontFamily: 'inherit', // The fontFamily for all pages is applied in `app/[lng]/layout.tsx` (https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
      h1: generateTypography(breakpoints, 'bold', 6, 6, true),
      h2: generateTypography(breakpoints, 'semiBold', 5, 5, true),
      h3: generateTypography(breakpoints, 'semiBold', 4, 4.5, true),
      h4: generateTypography(breakpoints, 'medium', 3, 4, true),
      h5: generateTypography(breakpoints, 'semiBold', 1, 3, true),
      subtitle1: generateTypography(breakpoints, 'medium', 1, 3, true),
      subtitle2: generateTypography(breakpoints, 'medium', 0, 2.5, true),
      body1: generateTypography(breakpoints, 'regular', 1, 3, false),
      body2: generateTypography(breakpoints, 'regular', 0, 2.5, false),
      button: generateTypography(breakpoints, 'semiBold', 0, 3, false, 0.02, false, {
        textTransform: 'uppercase',
      }),
      caption: generateTypography(breakpoints, 'regular', -0.5, 2, false),
      overline: generateTypography(breakpoints, 'semiBold', -1, 2, false, 0.1, false, {
        textTransform: 'uppercase',
      }),
    },
  });

  return createMuiTheme(
    {
      components: {
        MuiUseMediaQuery: {
          defaultProps: {
            ssrMatchMedia: (query) => ({
              matches: mediaQuery.match(query, {
                width: expectDesktop ? '1024px' : '0px',
              }),
            }),
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: ({ ownerState, theme }) => ({
              // When overriding styles in an MUI container, the disableGutters prop no longer works as expected.
              // To work around this, `paddingLeft` and `paddingRight` customisations are being added only
              // when `disableGutters` is not specified. More about this issue: https://github.com/mui/material-ui/issues/30825
              paddingLeft:
                (!ownerState.disableGutters && `calc(${theme.spacing(2)} + env(safe-area-inset-left))`) ||
                undefined,
              paddingRight:
                (!ownerState.disableGutters && `calc(${theme.spacing(2)} + env(safe-area-inset-right))`) ||
                undefined,
              fallbacks: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
              },
              [theme.breakpoints.up('sm')]: {
                paddingLeft:
                  (!ownerState.disableGutters && `calc(${theme.spacing(3)} + env(safe-area-inset-left))`) ||
                  undefined,
                paddingRight:
                  (!ownerState.disableGutters && `calc(${theme.spacing(3)} + env(safe-area-inset-right))`) ||
                  undefined,
                fallbacks: {
                  paddingLeft: !ownerState.disableGutters && theme.spacing(3),
                  paddingRight: !ownerState.disableGutters && theme.spacing(3),
                },
              },
            }),
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: { color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.main },
          },
        },
        MuiBottomNavigation: {
          styleOverrides: {
            root: {
              height: `calc(${MOBILE_NAV_HEIGHT}px + env(safe-area-inset-bottom))`,
              paddingBottom: 'env(safe-area-inset-bottom)',
              boxShadow: theme.shadows[8],
              fallbacks: {
                height: MOBILE_NAV_HEIGHT,
              },
            },
          },
        },
        MuiBottomNavigationAction: {
          styleOverrides: {
            label: {
              hyphens: 'manual',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState, theme }) => {
              let color: string;
              // white/black for light/dark mode
              if (ownerState.variant === 'contained') color = theme.palette.primary.contrastText;
              // orange
              else if (ownerState.color === 'warning') color = theme.palette.warning.main;
              // red
              else if (ownerState.color === 'error') color = theme.palette.error.main;
              // blue
              else if (ownerState.color === 'primary') color = theme.palette.primary.main;
              else if (ownerState.color === 'inherit') return {};
              // black/white for light/dark mode for secondary etc
              else color = theme.palette.text.primary;
              return { color };
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            input: {
              hyphens: 'manual',
            },
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },
        MuiDialogActions: {
          styleOverrides: {
            root: {
              borderTop: `1px solid ${theme.palette.divider}`,
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              width: `calc(100vw - ${theme.spacing(7)})`,
              [theme.breakpoints.up('sm')]: {
                width: `calc(100vw - ${theme.spacing(8)})`,
              },
            },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              color: theme.palette.text.secondary,
              '&$selected, &$selected:hover': {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
              },
            },
          },
        },
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              minWidth: theme.spacing(5),
              color: 'inherit',
            },
          },
        },
        MuiAccordion: {
          styleOverrides: {
            root: {
              '&$disabled': {
                backgroundColor: theme.palette.background.paper,
              },
            },
          },
        },
        MuiAccordionSummary: {
          styleOverrides: {
            content: {
              justifyContent: 'space-between',
            },
          },
          // defaultProps: {
          //   expandIcon: {
          //     '&$expanded': {
          //       transform: 'rotate(90deg)', //TODO check
          //     },
          //   },
          // },
        },
        MuiAccordionDetails: {
          styleOverrides: {
            root: {
              display: 'block',
            },
          },
        },
        MuiStepper: {
          styleOverrides: {
            root: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        },
        MuiStepIcon: {
          styleOverrides: {
            root: {
              '&$completed': {
                color: theme.palette.secondary.main,
              },
              '&$active': {
                color: theme.palette.secondary.main,
              },
            },
            text: {
              fontWeight: 500,
            },
          },
        },
        MuiSpeedDialAction: {
          styleOverrides: {
            staticTooltipLabel: {
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.primary.contrastText,
              minWidth: theme.spacing(13),
            },
          },
          defaultProps: {
            arrow: true,
          },
        },
      },
    },
    theme,
  );
};
