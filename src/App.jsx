import '@fontsource/commissioner';
import '@fontsource/roboto-mono';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { theme } from './theme';
import Routes from './routes';
import StateProvider from './providers/StateProvider';

const cache = createCache({
  key: 'css',
  prepend: true
});

const App = () => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <StyledEngineProvider injectFirst>
          <Router>
            <Routes />
          </Router>
        </StyledEngineProvider>
      </StateProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
