import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import ACM from '../../../../assets/applications/ACM.png';
import { Main } from 'layouts';
import Container from 'components/Container';
import ProductDetails from 'common/ProductDetails';

const mock = {
  image: ACM,
  description:
    'Supervisory controllers that monitor and control the HC and Urea / AdBlue dosing in Diesel vehicles to meet the stringent BS-VI / Euro 5 norms.',
  feature1: 'Robust IP69K compliant hardware, designed for use in demanding CV applications.',
  feature2: 'Supports WWH-OBD and CAN J1939 enabling seamless diagnostics and communication with other nodes including the Engine ECU in the vehicle.',
  feature3: 'Ease of Calibration via ETAS INCA and Vector CANape.',
  feature4: 'Compatible with different Aftertreatment system sensors and actuators.',
  feature5: 'Custom ECU model with production intended hardware and model based software development framework that enables customers to develop, control and own their application code.',
  title: 'Aftertreatment Control Module (ACM)',
  date: '',
};
const ACMProduct = () => {
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
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        // marginTop={-7}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ProductDetails mock={mock} type="ACM" />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default ACMProduct;
