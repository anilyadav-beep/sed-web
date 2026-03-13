import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import ICEProductDetails from 'common/ICEProductDetails';
import efi from '../../assets/products/EFI-Black.jpg';

const mock = {
  image: efi,
  description: '',
  feature1: '',
  feature2: '',
  feature3: 'Optional integration of ISG electronics with EFI ECU electronics.',
  feature4: 'Option to integrate OEM-specific custom logics',
  title: 'ECUs for Fuel Injection',
  date: 'In Production Since 2022',
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
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        // marginTop={-7}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ICEProductDetails mock={mock} type="ICE3" />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
