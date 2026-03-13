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
import ot150 from '../../../../assets/products/OT150.jpg';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

//import connectivityBorchure from '../../../../assets/brochures/SEDEMAC_Connectivity_2019.pdf';

const mock = {
  image: ot150,
  description:
    '',
  feature1:
    '',
  feature2:
    '',
  feature3:
    '',
  feature4:
    '',
  title:
    'Connectivity Devices',
  date: '',
};

const ProductLine3 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-OT150');
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
              label="Licensable DMS"
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
                <Link href='/products/small-engines' color="inherit">for ICE Powered Vehicles</Link>, <Link href='//small-evs' color="inherit"> Electric Vehicles</Link> &amp; <Link href='/generators' color="inherit"> Generators</Link>
              </Typography>
              <Typography color="text.secondary">Cellular and bluetooth connectivity device with GNSS &#40;position sensors&#41; which enable geo-tracking, geo-fencing. Inertial Measurement Sensors. ECU coupling over CAN for over-the-air upgrades (OTA) of the device and connected ECUs/Controllers.</Typography>
              <br />
              <Typography color="text.secondary"><li>Licensable production-grade Device Management System for on-premise server hosting.</li></Typography>
              <Typography color="text.secondary"><li>Exhaustive &amp; secure-MQTT &amp; HTTP APIs for complete control over device - for OTA and application building.</li></Typography>
              <Typography color="text.secondary"><li>Encryption Secure: SSL 3.0 web applications &amp; TLS 1.2 device communications.</li></Typography>
              {/* <Typography color="text.secondary"><li>9-axis inertial sensors and low-power mode &#040;100uA&#041;.</li></Typography> */}
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
                    onClick={()=>gaEventTracker('OT150-Contact')}
                  >
                    <text style={{color:"#ffffff"}}>Get in Touch</text>
                  </Button>
                </Box>
                <Typography  sx={{ display: { xs: 'flex', md: 'flex' }}} color={'text.secondary'}>In Batch Production<br />Deployed in Asia, Africa &amp; Latin America</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine3;
