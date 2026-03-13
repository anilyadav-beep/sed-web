import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import CookieConsent from 'react-cookie-consent';
import Link from '@mui/material/Link';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import './styles.css';
import { dark } from 'theme/palette';
import ScrollToTop from 'ScrollToTop';

const App = () => {
  return (
    <Page>
      <BrowserRouter>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
      <CookieConsent
        location="bottom"
        debug={false}
        buttonStyle={dark.cookies}
        acceptOnScroll={true}
        expires={150}
      >
        This site uses cookies. Read More:{' '}
        <Link href="/cookies" color={'inherit'}>
          Cookie Policy
        </Link>
      </CookieConsent>
    </Page>
  );
};

export default App;
