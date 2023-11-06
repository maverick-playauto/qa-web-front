const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const color = {
  white: '#ffffff',
  black: '#000000',
  red: '#FF6B6B',
  orange: '#FF9F45',
  yellow: '#FFD93D',
  green: '#6BCB77',
  blue: '#4D96FF',
  skyblue: '#6aafe6',
  navy: '#3C486B',
  purple: '#949CDF',
  beige: '#FFF5E0',
  gray: '#D8D9DA',
  lightGray: '#fbfbfb',
};

const fontSize = {
  xs: '8px',
  s: '12px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
  '7xl': '72px',
  '8xl': '96px',
  '9xl': '128px',
};

const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const theme = {
  color,
  fontSize,
  device,
  fontWeight,
};

export default theme;
