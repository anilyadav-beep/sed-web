import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import isg from '../../../../assets/products/isg-kit.jpg';
import isgBrochure from '../../../../assets/brochures/SEDEMAC_ISG_EFI_2019.pdf';
//import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const mock = {
  image: isg,
  description: '',
  feature1: ' ',
  feature2: '',
  feature3: '',
  title: 'Sensorless Integrated Starter Generator',
  date: '',
};

const ProductLine1 = () => {
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
              label="Built with SLC"
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
              <Typography color="text.secondary">
                ISG eliminates all components of the starter motor system,
                enabling delightful, silent &amp; reliable starts.{' '}
                <b>
                  End-users{' '}
                  <Link href="https://youtu.be/RgnPEu9oGqA" color="inherit">
                    {'love it'}
                  </Link>
                </b>
                . The technology also enables reliable idle start-stop offerings
                by vehicle manufacturers without concerns of starter motor
                reliability.{' '}
              </Typography>
              <br />
              <Typography color="text.secondary">
                <li>
                  <Link href="https://youtu.be/T1baFYNIGF0" color="inherit">
                    {'Our ISG'}
                  </Link>{' '}
                  offering uses sensorless controls (no hall effect sensors used
                  in magnetos). This allows us to offer the benefits of ISG to
                  all vehicles including motorcycles with <b>wet magnetos</b>{' '}
                  &amp; <b>without changes to the engine crank case</b>.
                </li>
              </Typography>
              <Typography color="text.secondary">
                <li>
                  We currently supply controllers and provide specifications for
                  magnetos. We will <b>shortly offer supply of magnetos</b>.
                </li>
              </Typography>
              <Typography color="text.secondary">
                <li>
                  We offer <b>integration of the electronics</b> of the ISG
                  controller and the Fuel Injection(FI) ECU.
                </li>
              </Typography>
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
                    href={isgBrochure}
                    target="_blank"
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                  >
                    <text style={{ color: '#ffffff', textAlign: 'center' }}>
                      Download Brochure
                    </text>
                  </Button>
                </Box>
                <Typography
                 sx={{ display: 'flex', textAlign:"center", ml:{xs:5, md:0}  }}
                  color={'text.secondary'}
                >
                  In Series Production: 2018
                  <br />
                  On over 2-Million Vehicles
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
