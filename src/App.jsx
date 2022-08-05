import '@fontsource/commissioner';
import '@fontsource/roboto-mono';
import { Provider as StateProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { store } from './store';
import { theme } from './theme';
import Routes from './routes';
import { AlertProvider } from './providers/AlertProvider';

const cache = createCache({
  key: 'css',
  prepend: true
});

const App = () => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <StateProvider store={store}>
          <AlertProvider>
            <Router>
              <Routes />
            </Router>
          </AlertProvider>
        </StateProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
