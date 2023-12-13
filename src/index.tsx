import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './assets/styles/GlobalStyle';
import { LightTheme } from './assets/styles/Theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={LightTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>,
);
