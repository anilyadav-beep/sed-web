import React, { useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Products } from './components';
import icetw from '../../assets/applications/Group_e2WN.png';
import mf1 from './../../assets/title/BGWhite.png';
import Welcome from 'common/Welcome';
import { scrollToElement, styles } from 'common/styles';

const Agency = () => {
  const theme = useTheme();
  const typedString = ['Motorcycles', 'Scooters', 'Rickshaws'];
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
  }, []);

  const scrollTo = useCallback((id) => scrollToElement(id), []);

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-1.5}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome
              evapplication={icetw}
              typedString={typedString}
              typed="evs"
              descText1="Our sensorless commutation (SLC) technology has shaped ISG adoption in small ICE-powered vehicles"
              headerText1="Integrated Starter Generator (ISG) & "
              headerText2="for "
              headerText3="Fuel Injection (FI) ECUs"
            />
            <Box mt={{xs:1, md:10}}>
              <NoSsr>
                <Box
                  component={'svg'}
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
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={"center"}
        id="small-engine"
        py={{xs:10, md:0}}
      >
        <Box className={'jarallax-img'} sx={styles(mf1, theme)} />
        <Container marginTop={0}>
          <Products />
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
