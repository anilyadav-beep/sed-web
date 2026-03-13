import React, { useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { SmallEngine } from './components';
import isg from '../../assets/products/isg-kit.jpg';
import mf1 from './../../assets/title/BGWhite.png';
import ICEProductDetails from 'common/ICEProductDetails';
import { styles } from 'common/styles';

const Agency = () => {
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

  const mock = {
    image: isg,
    description:
      'ISG eliminates the starter motor system, enabling delightful, silent & reliable starts for end-users. This technology also enables features like torque assist and idle start-stop without concerns of starter motor reliability.',
    feature1: ' ',
    feature2: '',
    feature3: '',
    title: 'Sensorless Integrated Starter Generators',
    date: '',
  };
  const scrollTo = useCallback((id) => scrollToElement(id), []);

  const theme = useTheme();

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-2.6}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ICEProductDetails mock={mock} type="ICE" />
            <Box marginTop={10}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => {
                    const section = document.getElementById('isg');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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
        id="isg"
      >
        <Box className={'jarallax-img'} sx={styles(mf1, theme)} />
        <Container>
          <SmallEngine />
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
