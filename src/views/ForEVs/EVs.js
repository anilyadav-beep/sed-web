import React, { useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import evapplication from '../../assets/applications/Small_Power_VehicleNEW.png';
import { Products } from './components';
import mf1 from './../../assets/title/BGWhite.png';
import Welcome from 'common/Welcome';
import { scrollToElement, styles } from 'common/styles';

const Agency = () => {
  const theme = useTheme();

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || jarallaxElems.length === 0) return;

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  }, []);

  const scrollTo = useCallback((id) => scrollToElement(id), []);

  return (
    <Main>
      <Box
        display="flex"
        alignItems="center"
        bgcolor=""
        mt={2}
        minHeight={'100vh'}
        marginTop={-1}
      >
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Welcome
              evapplication={evapplication}
              typed="ecBike"
              descText1="We offer sensorless commutation (SLC), which eliminates hall sensors & associated failures"
              headerText1="Motor Control Units (MCUs) and Motors for"
              headerText2="e-"
              imageProps={{
                sx: {
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: 400,
                  objectFit: 'contain',
                  display: 'block',
                  mx: 'auto',
                },
              }}
            />
            <Box mt={{ xs: 1, md: 15 }}>
              <NoSsr>
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('small-engine')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section with Jarallax Background */}
      <Box
        className="jarallax"
        data-jarallax
        data-speed="0.2"
        position="relative"
        minHeight="90vh"
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        id="small-engine"
      >
        <Box className="jarallax-img" sx={styles(mf1, theme)} />
        <Container marginTop={0}>
          <Products />
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
