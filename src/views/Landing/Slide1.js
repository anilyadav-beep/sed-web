import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Team from './../Team';

const ProductLine2 = () => {
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
              width: { xs: 1, md: '0%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          >
            {/* <Team /> */}
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '100%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'normal',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant="h3"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 600,
                }}
              >
                {/* Investors&apos; Call */}
                Project Ramanujan
              </Typography>
            </Box>
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={0}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                justifyContent="center"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                2025-26
              </Typography>
              {/* <Typography
                variant='h6'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 500, 
                }}
              >
                In attendance:
                ICICI Securities
              </Typography> */}
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine2;
