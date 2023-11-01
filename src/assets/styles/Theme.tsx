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
  navy: '#3C486B',
  purple: '#949CDF',
  beige: '#FFF5E0',
};

const fontSize = {
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '48px',
  xxlarge: '96px',
};

const theme = {
  color,
  fontSize,
  device,
};

export default theme;
