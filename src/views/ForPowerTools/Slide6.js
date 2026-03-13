/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import {default as Blocks} from './Blocks';

const Slide6 = () => {
  const LeftSide = () => (
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
              //textTransform: 'uppercase',
              fontWeight: '700',
            }}
            gutterBottom
            color={'danger'}
            align={'center'}
            variant={'h4'}
          >
          Traction
          </Typography>
        </Box>
        
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
        </Box>
        <Box marginBottom={0}>
          <Typography
            sx={{
              //textTransform: 'uppercase',
              fontWeight: '700',
            }}
            gutterBottom
            color={'danger'}
            align={'center'}
            variant={'h5'}
          >
         Expect to win first business over Jul-Sep 2022 &amp; get to production by Jul-Sep 2023/Sep-Dec 2023.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Slide6;
