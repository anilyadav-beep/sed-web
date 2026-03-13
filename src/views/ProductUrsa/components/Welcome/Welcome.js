import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ursa from '../../../../assets/products/Ursa.jpg';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
//import ursaBrochure from '../../../../assets/brochures/SEDEMAC_URSA_2020.pdf';

const mock = {
  image: ursa,
  description:
    'Intended for 48V lithium ion batteries. Kalman state filters used, which provide a significant improvement in State of Charge (SoC) estimation as compared to traditional algorithms such as coulomb counting or terminal voltage-based state estimations. State of Health (SoH) estimators to estimate battery capacity and battery resistance.',
  feature1:
    'Supports up to 14 cells in series',
  feature2:
    'Passive Balancing. Provides capacity and internal resistance estimation',
  feature3:
    'DC-DC converters also available',
  title:
    'Battery Management Systems',
  date: 'Field Trial Ready',
};

const ProductLine2 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Ursa');
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
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={mock.image}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                maxHeight: 360,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Chip
              label="Kalman SoC Estimators"
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'background.paper',
              }}
            />
            <Box
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
            </Box>
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant={'h5'} gutterBottom>
                {mock.title}
              </Typography>
              <Typography variant={'subtitle1'} gutterBottom sx={{fontWeight: 700}}>
                <Link href='//small-evs' color="inherit">for Electric Bikes/Scooters</Link>
              </Typography>
              <Typography color="text.secondary">{mock.description}</Typography>
              <br />
              <Typography color="text.secondary"><li>{mock.feature1}</li></Typography>
              <Typography color="text.secondary"><li>{mock.feature2}</li></Typography>
              <Typography color="text.secondary"><li>{mock.feature3}</li></Typography>
            </Box>
            <Box>
              <Divider sx={{ marginY: 2 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Button
                    variant="contained"
                    text-color="inherit"
                    color="primary"
                    size="small"
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{ display: { xs: 'none', md: 'flex' }}}
                    onClick={()=>gaEventTracker('Ursa-Contact')}
                  >
                    <text style={{color:"#ffffff"}}>Get in Touch</text>
                  </Button>
                </Box>
                <Typography  sx={{ display: { xs: 'flex', md: 'flex' }}} color={'text.secondary'}>{mock.date}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine2;
