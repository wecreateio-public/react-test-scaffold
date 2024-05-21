import { Breakpoint, Breakpoints } from '@mui/material/styles';
import { CSSProperties, TypographyStyleOptions } from '@mui/material/styles/createTypography';

const responsiveScalingMap: { [breakpoint in Breakpoint]: number } = {
  xs: 0.6,
  sm: 0.7,
  md: 1,
  lg: 1,
  xl: 1,
};

/** Creates a function to generate typography styles according to a preconfigured modular scale. */
export const createTypographyGenerator =
  (
    baseFontSize: number,
    htmlFontSize: number,
    modularScale: number,
    fontWeights: Record<'regular' | 'medium' | 'semiBold' | 'bold', number>
  ) =>
  (
    existingBreakpoints: Breakpoints,
    weight: keyof typeof fontWeights,
    size: number,
    leading: number,
    responsive: boolean,
    tracking = 0,
    hyphenation = true,
    extraStyles?: CSSProperties
  ): TypographyStyleOptions => {
    const sizeFactor = Math.pow(modularScale, size);
    const fontSize = baseFontSize * sizeFactor;

    const responsiveScaleDown: CSSProperties = {};
    if (responsive) {
      Object.entries(responsiveScalingMap).forEach((b) => {
        responsiveScaleDown[existingBreakpoints.up(b[0] as keyof typeof responsiveScalingMap)] = {
          fontSize: `${(baseFontSize * sizeFactor * b[1]) / htmlFontSize}rem`,
        };
      });
    }

    return {
      fontWeight: fontWeights[weight],
      fontSize: `${fontSize / htmlFontSize}rem`,
      lineHeight: (leading * 8) / baseFontSize / sizeFactor,
      letterSpacing: `${tracking}em`,
      hyphens: hyphenation ? 'auto' : 'manual',
      ...responsiveScaleDown,
      ...extraStyles,
    };
  };
/** Prepare a typography generator with our custom type scales. */
export const generateTypography = createTypographyGenerator(14, 16, 1.2, {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
});
