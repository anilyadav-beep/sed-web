import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import ProductDetails from 'common/ProductDetails';
import gc1k from '../../assets/products/GC1k.jpg';

const mock = {
  image: gc1k,
  description:
    'Supervisory controllers that address stand-by and prime power generators for homes, enterprises, telecom towers and lighting towers.',
  feature1: 'Automatic and Manual modes of operation',
  feature2: 'Modern wired communications - CAN and RS485',
  feature3: 'Configuration tools available over mobile application',
  title: 'AMF Controllers with Integrated e-Governing',
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
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-2.6}
        // paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ProductDetails mock={mock} type="GCU" />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
