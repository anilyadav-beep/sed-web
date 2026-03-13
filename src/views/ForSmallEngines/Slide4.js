import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ISGExplainer from '../../assets/investors/ISGExplainer.png';

const Slide4 = () => {
  const theme = useTheme();
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
              width: { xs: 1, md: '60%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          > 
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={ISGExplainer}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                maxHeight: 800,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '60%' },
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
                We are a major player in ISG, global pioneer of sensorless ISG
                <br />
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                <li>Sensorless crucial for enabling ISG on motorcycles.</li>
                <li>We are the <b>only company, globally</b>, today that can offer an ISG solution that works for every ICE 2W (including wet magneto based i.e. most motorcycles).</li>
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide4;
