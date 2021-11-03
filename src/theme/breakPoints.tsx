const breakPoint = {
  xSmall: "576px",
  small: "768px",
  medium: "992px",
  large: "1200px",
  xLarge: "1400px",
};

export const device = {
  xs: `(max-width: ${breakPoint.xSmall})`,
  sm: `(max-width: ${breakPoint.small})`,
  md: `(max-width: ${breakPoint.medium})`,
  lg: `(max-width: ${breakPoint.large})`,
  xl: `(max-width: ${breakPoint.xLarge})`,
};
