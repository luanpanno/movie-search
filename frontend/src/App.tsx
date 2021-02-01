import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes/routes';
import { MovieProvider } from './shared/hooks/useMovie';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
