import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
//import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
//import Button from '@mui/material/Button';
import isg from '../../../../assets/products/isg-kit.jpg';
//import Link from '@mui/material/Link';
//import Container from 'components/Container';
import Typed from 'react-typed';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

//import isgBrochure from '../../../../assets/brochures/SEDEMAC_ISG_EFI_2019.pdf';



const ProductLine2 = () => {
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
            <Link href='/isg' onClick={()=>gaEventTracker('Featured-Image')}>
              {/* <Box
                component={'iframe'}
                title="video"
                width="100%"
                height="100%"
                maxHeight={300}
                src='https://www.youtube.com/embed/evDJbKjBuT0'
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                borderRadius={2}
              /> */}
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={isg}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  maxHeight: 400,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Chip
                label="Featured: Sensorless ISG"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 10,
                  bgcolor: 'theme.palette.primary.main',
                }}
              />
            </Link>
            {/* <Chip
              label="Sensorless Integrated Starter Generator"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 10,
                bgcolor: 'theme.palette.primary.main',
              }}
            /> */}
            {/* <Box
              component={'svg'}
              viewBox="0 0 112 690"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                position: 'absolute',
                bottom: 0,
                top: '-50%',
                left: 0,
                right: 0,
                color: theme.palette.background.paper,
                transform: 'scale(2)',
                height: 1,
                width: 'auto',
                transformOrigin: 'top center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <path
                d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                fill="currentColor"
              />
            </Box> */}
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
                variant='h3'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 600, 
                }}
              >
                Innovative Control Products 
                <br />
                <Typography
                  color={'primary.dark'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.0,
                    )} 0%)`,
                  }}
                > for {' '} 
                  <Typed
                    strings={['ICE Motorcycles', 'ICE Scooters','Electric Bikes','Electric Scooters', 'Generators', 'Power Tools']}
                    typeSpeed={100}
                    loop={true}
                    showCursor={false}
                  />
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                supplied in large volumes from in-house manufacturing lines.
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine2;
