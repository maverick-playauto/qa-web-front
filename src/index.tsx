import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/Theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
);
