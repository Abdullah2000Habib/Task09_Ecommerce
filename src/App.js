
import { ThemeProvider } from '@emotion/react';
import Home from './components/Home';

import { Global } from '@emotion/react';
import { useState } from 'react';
import { ThemeContext } from './contexts/themeContext';
import GlobalStyles from './global/globalStyle';
import { darkTheme, lightTheme } from './global/themes';
function App() {
  const mode = localStorage.getItem('theme');
  const [theme,setTheme] =useState(mode === 'dark'?darkTheme:lightTheme);
  return (
    <>
        <ThemeContext.Provider  value={[theme,setTheme]}>
          <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <Home/> 
        </ThemeProvider>
        </ThemeContext.Provider>
    </>
  );
}

export default App;
