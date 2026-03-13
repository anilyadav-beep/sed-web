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
// import isaac from '../../../../assets/products/ISAAC1500NEW.png';
import isaac from '../../../../assets/applications/ISAACs.png';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import innovativeBrochure from '../../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';

const mock = {
  image: isaac,
  description:
    'Unique to our offering is Sensorless Motor Control (SLC) technology which eliminates position sensors (hall-effect/encoders) from the traction motors. This elimination does away with failures resulting from position sensors, making the system more failure-proof.',
  feature1: '',
  feature2: '',
  feature3: '',
  title: 'ISAAC Series - Traction Controllers',
  date: '',
};

// Field Oriented Control (FOC) enabled controllers for traction motors.
// Equipped with 4-quadrant operation enabling efficient regenerative breaking.

const ProductLine1 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Innovative');
  return (

    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          mt: {xs:0, md:-8},
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
          justifyContent={'space-between'}
          sx={{ backgroundImage: 'none' }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '42%' },
              // border: 1,
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
              // ml:20
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={mock?.image}
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
              label="Available with SLC"
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
              <Typography
                variant={'subtitle1'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                for{' '}
                <Link href="/products/small-evs" color="#A03811">
                  Electric Vehicles,
                </Link>{' '}
                <Link href="/products/power-tools" color="#A03811">
                  Power-Tools
                </Link>{' '}
                &amp;{' '}
                <Link
                  href="/products/outdoor-powered-equipment"
                  color="#A03811"
                >
                  OPE
                </Link>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Field Oriented Control (FOC) enabled controllers for traction
                  motors.{' '}
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Equipped with 4-quadrant operation enabling efficient
                  regenerative breaking.
                </li>
              </Typography>
              {/* <Divider sx={{ marginY: 1 }} /> */}
            </Box>
            {/* <Box>
              <Divider sx={{ marginY: 1 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={6}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Button
                    variant="contained"
                    text-color="inherit"
                    color="primary"
                    size="small"
                    target="_blank"
                    href={innovativeBrochure}
                    sx={{ display:'flex' }}
                    onClick={() =>
                      gaEventTracker('Innovative-Brochure-Download')
                    }
                  >
                     <text style={{ color: '#ffffff', textAlign:"center" }}>Download Brochure</text>
                  </Button>
                </Box> */}
                <Box>
              <Divider sx={{ my: 1 }} />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'row', sm: 'row' }} // responsive layout
                gap={{ xs: 1, sm: 0 }}
              >
                {/* Left Side */}
                <Box display="flex" alignItems="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    href={innovativeBrochure}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('Innovative-Brochure-Download')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Download Brochure
                    </Typography>
                  </Button>
                </Box>
                <Typography
                   sx={{ display: 'flex', ml: { xs: 3, md: 0 } }}
                  color={'text.secondary'}
                  fontSize={15}
                >
                  In Series Production since 2023
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine1;
