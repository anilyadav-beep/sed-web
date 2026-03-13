/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import {default as Blocks} from './Blocks';

const Slide2 = () => {
  const InsertBox = () => (
    <Box>
      <Box marginBottom={2}>
        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& img': {
              objectFit: 'cover',
            },
            '& .lazy-load-image-loaded': {
              height: 1,
              width: 1,
            },
          }}
        >
          <Blocks />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box marginBottom={0}>
          <Typography
            sx={{
              fontWeight: '700',
            }}
            gutterBottom
            color={'danger'}
            align={'center'}
            variant={'h4'}
          >
          How our products come into being?
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <InsertBox />
            </Container>
          </Box>
        </Box>
        <Box marginBottom={0}>
          <Typography
            sx={{
              fontWeight: '700',
            }}
            gutterBottom
            color={'danger'}
            align={'center'}
            variant={'h5'}
          >
          Conceiving fresh technology and coming up with base product architectures for complex products
            <br />
          — not done by India shops of global Tier-Is, not done by Indian suppliers. 
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Slide2;
