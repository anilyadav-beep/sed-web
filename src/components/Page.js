// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { ThemeProvider } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import CssBaseline from '@mui/material/CssBaseline';
// import getTheme from 'theme';
// import AOS from 'aos';

// export const useDarkMode = () => {
//   const [themeMode, setTheme] = useState('light');
//   const [mountedComponent, setMountedComponent] = useState(false);

//   const setMode = (mode) => {
//     try {
//       window.localStorage.setItem('themeMode', mode);
//     } catch {
//       /* do nothing */
//     }

//     setTheme(mode);
//   };

//   const themeToggler = () => {
//     themeMode === 'light' ? setMode('dark') : setMode('light');
//   };

//   useEffect(() => {
//     try {
//       const localTheme = window.localStorage.getItem('themeMode');
//       localTheme ? setTheme(localTheme) : setMode('light');
//     } catch {
//       setMode('light');
//     }

//     setMountedComponent(true);
//   }, []);

//   return [themeMode, themeToggler, mountedComponent];
// };

// export default function Page({ children }) {
//   React.useEffect(() => {
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//     AOS.init({
//       once: true,
//       delay: 0,
//       duration: 800,
//       offset: 0,
//       easing: 'ease-in-out',
//     });
//   }, []);
//   const [themeMode, themeToggler, mountedComponent] = useDarkMode();
//   useEffect(() => {
//     AOS.refresh();
//   }, [mountedComponent, themeMode]);

//   return (
//     // <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
//     //   <CssBaseline />
//     //   <div key={themeMode}>
//     //     <Paper elevation={0}>{children}</Paper>
//     //   </div>
//     // </ThemeProvider>

//     <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
//       <CssBaseline />

//       {/* 🚀 This forces Samsung Browser to repaint when theme changes */}
//       <div key={themeMode} style={{ minHeight: '100vh' }}>
//         <Paper elevation={0}>{children}</Paper>
//       </div>
//     </ThemeProvider>
//   );
// }

// Page.propTypes = {
//   children: PropTypes.node.isRequired,
// };

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {}

    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setTheme(localTheme) : setMode('light');
    } catch {
      setMode('light');
    }
    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

export default function Page({ children }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />

      {/* 🚀 Samsung Internet FIX (forces full repaint when theme changes) */}
      <div key={themeMode} style={{ minHeight: '100vh', width: '100%' }}>
        <Paper elevation={0} square style={{ minHeight: '100vh' }}>
          {children}
        </Paper>
      </div>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
