import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { darkMode, GlobalStyles, lightMode } from './assets/styles';
import Routes from './routes/routes';
import { LoadingProvider } from './shared/hooks/useLoading';
import { MovieProvider } from './shared/hooks/useMovie';
import useTheme from './shared/hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <ToastContainer />
      <GlobalStyles />
      <LoadingProvider>
        <MovieProvider>
          <Routes />
        </MovieProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
