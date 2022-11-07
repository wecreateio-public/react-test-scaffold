import { CSSProperties } from '@material-ui/styles';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

/** Creates a function to generate typography styles according to a preconfigured modular scale. */
export const createTypographyGenerator =
  (
    baseFontSize: number,
    htmlFontSize: number,
    modularScale: number,
    fontWeights: Record<'regular' | 'medium' | 'semiBold' | 'bold', number>
  ) =>
  (
    weight: keyof typeof fontWeights,
    size: number,
    leading: number,
    tracking = 0,
    hyphenation = true,
    extraStyles?: CSSProperties
  ): TypographyStyleOptions => {
    const sizeFactor = Math.pow(modularScale, size);

    return {
      fontWeight: fontWeights[weight],
      fontSize: `${(baseFontSize * sizeFactor) / htmlFontSize}rem`,
      lineHeight: (leading * 8) / baseFontSize / sizeFactor,
      letterSpacing: `${tracking}em`,
      hyphens: hyphenation ? 'auto' : 'manual',
      ...extraStyles,
    };
  };
