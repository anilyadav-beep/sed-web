import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { default as Slide1 } from './Slide1';
//import { default as Slide2 } from './Slide2';
import { default as Slide3 } from './Slide3';
import bgImg from '../../assets/title/BGWhite.png';

const Origins = () => {
 
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('authenticated');
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
 
  const navigate = useNavigate();
  if (!authenticated) {
    navigate('/');
  }


  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  },[]);

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-5}
        paddingTop={5}
        id="slide-1"
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Slide1 />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-3')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="slide-2"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(bgImg)}
        />
        <Container marginTop={0}>
          <Box margin={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <NoSsr>
              <Box 
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => scrollTo('slide-1')}
                sx={{ cursor: 'pointer' }}
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </Box>
            </NoSsr>
          </Box>
          <Slide2 />
          <Box marginTop={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <NoSsr>
              <Box 
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => scrollTo('slide-3')}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Container>
      </Box> */}
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="slide-3"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(bgImg)}
        />
        <Container marginTop={0}>
          <Box margin={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <NoSsr>
              <Box 
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => scrollTo('slide-1')}
                sx={{ cursor: 'pointer' }}
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </Box>
            </NoSsr>
          </Box>
          <Slide3 />
        </Container>
      </Box>
    </Main>
  );
};

export default Origins;
