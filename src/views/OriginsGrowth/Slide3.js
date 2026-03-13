import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {default as Chart1} from './Chart1';

const Slide3 = () => {
  return (
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={0}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          > 
            <Chart1 />
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h4'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 600, 
                }}
              >
                Demonstrating robust, profitable growth.
                <br />
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                On track to creating a substantially sized, high ROCE company selling differentiated products to market leaders
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide3;
