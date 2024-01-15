import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/styles/GlobalStyle';
import { LightTheme } from './assets/styles/Theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
);
