import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import gc1k from '../../assets/products/20230616-Hub-Drive.png';
import ProductDetails from 'common/ProductDetails';

const mock = {
  image: gc1k,
  description:
    'Field Oriented Control (FOC) enabled controllers for traction motors. Equipped with regenerative braking logic. Unique to our offering is Sensorless Motor Control (SLC) technology which eliminates position sensors (hall-effect/encoders) from the traction motors. This elimination does away with failures resulting from position sensors, making the system more failure-proof.',
  // feature1:
  //   'Automatic and Manual modes of operation',
  // feature2:
  //   'Modern wired communications - CAN and RS485',
  // feature3:
  //   'Configuration tools available over mobile application',
  title: 'ISAAC Series - Traction Controllers',
  date: '',
};
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

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-7}
        paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ProductDetails mock={mock} />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
