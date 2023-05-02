
import { ThemeProvider } from '@emotion/react';
import Home from './components/Home';

import { Global } from '@emotion/react';
import GlobalStyles from './global/globalStyle';
import { lightTheme } from './global/themes';
function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
      <Global styles={GlobalStyles} />
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
