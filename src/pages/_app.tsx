import { AppProps } from 'next/app';

import { useCallback, useEffect, useState } from 'react';
import GlobalStyles from '../styles/global';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { combineTheme, dark, light } from '../styles/themes';
import { ThemeContextApp } from '../context/ThemeContextApp';

// Messages de alertas e progressbar de carregamento das paginas
import Switch from 'react-switch';
import { Toaster } from 'react-hot-toast'
import NextNprogress from 'nextjs-progressbar';
import { setCookie, parseCookies } from 'nookies';
import { Header } from '../components/Header';

function App({ Component, pageProps }: AppProps) {

  const cookies = parseCookies();
  const { USER_THEME } = cookies;

  //  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  //  const activeTheme = theme;

  console.log(' o que tem aqui', Component)
  /* 
    const toggleTheme = () => {
  
      if (theme.title === 'light') {
        setTheme(combineTheme(dark))
        setCookie(null, 'USER_THEME', 'dark', {
          maxAge: 86400,
          path: '/'
        });
      } else {
        setTheme(combineTheme(light))
        setCookie(null, 'USER_THEME', 'light', {
          maxAge: 86400,
          path: '/'
        });
      }
    }; */

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  const toggleTheme = () => {
    // setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))

    if (theme.title === 'light') {
      setTheme(combineTheme(dark))
      setCookie(null, 'USER_THEME', 'dark', {
        maxAge: 86400,
        path: '/'
      });
    } else {
      setTheme(combineTheme(light))
      setCookie(null, 'USER_THEME', 'light', {
        maxAge: 86400,
        path: '/'
      });
    }
  };

  /* 
    useEffect(() => {
      setTheme(theme.title === 'light' ? setTheme(dark) : setTheme(light));
    }, [theme]);
   */

  useEffect(() => {
    USER_THEME === 'light' ? setTheme(light) : setTheme(dark);
  }, [theme]);


  return (
    <ThemeProvider theme={theme}>
      <ThemeContextApp.Provider value={{ toggleTheme }}>
        <NextNprogress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeContextApp.Provider>
    </ThemeProvider>
  );
}

export default App;