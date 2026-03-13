import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ICEUniverse from '../../assets/investors/ICEUniverse.png';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';

const Slide8 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Landing');
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
            <Link href='/traction-controllers' onClick={()=>gaEventTracker('Featured-Image')}>
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={ICEUniverse}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  maxHeight: 400,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Link>
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '80%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h5'
                color="text.primary"
                sx={{
                  fontWeight: 500, 
                }}
              >
              GTM Strategy for ICE 2W market: <br />
                <Typography  variant='h4' sx={{
                  fontWeight: 800, 
                }}>
              Direct sales to OEMs across the world 
                </Typography>                         
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide8;
