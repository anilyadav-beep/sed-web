import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Welcome,
} from './components';

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
  },[]);

  return (
    <Main>
      <Box
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-2.6}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
