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
import Link from '@mui/material/Link';
import si from '../../../../assets/products/TCI.png';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
//import isgBrochure from '../../../../assets/brochures/SEDEMAC_ISG_EFI_2019.pdf';


const mock = {
  image: si,
  description:
    'Technology embedded in ignition controllers -- offered with TCI (Transistor Controlled Ignition) or CDI (Capacitive Discharge Ignition) hardware topologies.',
  feature1:
    'Unique technology that eliminates Throttle Position Sensors (TPS).',
  feature2:
    'Increased flexibility to OEM engineering teams to decide speed-load vs spark-timing map.',
  feature3:
    'Higher granularity in the "load" dimension as compared to when using a switch-type TPS.',
  feature4:
    '',
  title:
    'Smart Ignition',
  date: '',
};

const ProductLine2 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-SI');
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
              label="BS IV Compliant"
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
                <Link href='/products/small-engines' color="inherit">for Small carburetted, spark-ignited engines</Link>
              </Typography>
              <Typography color="text.secondary">{mock.description}</Typography>
              <br />
              <Typography color="text.secondary"><li>{mock.feature1}</li></Typography>
              <Typography color="text.secondary"><li>{mock.feature2}</li></Typography>
              <Typography color="text.secondary"><li>{mock.feature3}</li></Typography>
              {/* <Typography color="text.secondary"><li>{mock.feature4}</li></Typography> */}
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
                    onClick={()=>gaEventTracker('SI-Contact')}
                  >
                    <text style={{color:"#ffffff"}}>Get in Touch</text>
                  </Button>
                </Box>
                <Typography  sx={{ display: { xs: 'flex', md: 'flex' }}} color={'text.secondary'}>In Production Since 2012<br />On over 30-Million Vehicles</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine2;
