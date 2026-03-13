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
import efi from '../../../../assets/products/GENERAC_LSI.jpg';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const mock = {
  image: efi,
  description:
    'Engine mounted, IP67 rated FI ECUs capable of controlling (upto) 8 cylinder engines with interface to set of standard inputs and outputs part of stationary generators.',
  feature1:
    'Custom ECU model with production intended CE certified hardware and model based software development framework that enables customers to develop, control and own their application code.',
  feature2:
    'Capability to interface throttle by wire through stepper / DC motors besides option to monitor loads through current transducers and mixer motor for Gas (NG) engines.',
  feature3: '8 cylinder Large Spark Ignited (LSI) FI controller products',
  feature4: '1 or 2 cylinder Small Spark Ignited (SSI) FI controller products',
  feature5: 'Fuel Injection ECUs Variants:',
  title: 'Fuel Injection ECUs',
  date: 'In Production Since 2019',
};

const ProductLine5 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-GensetEFI');
  return (
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          mt: { xs: 0, md: -8 },
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
              label="CE Certified"
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
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                for{' '}
                <Link href="/products/generators" color="primary">
                  Gas Powered Generators, CVs
                </Link>
              </Typography>

              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>

              {/* <br /> */}

              <div style={{ margin: 0, paddingLeft: '0' }}>
                <li>
                  <Typography color="text.secondary" fontSize={15}>
                    {mock.feature1}
                  </Typography>
                </li>
                <li>
                  <Typography color="text.secondary" fontSize={15}>
                    {mock.feature2}
                  </Typography>
                </li>
                <li>
                  <Typography color="text.secondary" fontSize={15}>
                    {mock.feature5}
                  </Typography>
                </li>
                <div style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>
                    <Typography color="text.secondary" fontSize={15}>
                      {mock.feature3}
                    </Typography>
                  </li>
                  <li>
                    <Typography color="text.secondary" fontSize={15}>
                      {mock.feature4}
                    </Typography>
                  </li>
                </div>
                {/* </li> */}
              </div>
            </Box>

            {/* <Box>
              <Divider sx={{ marginY: 1 }} />
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
                    sx={{ display:'flex'}}
                    onClick={() => gaEventTracker('Gas-EFI-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
                  </Button>
                </Box> */}

            <Box>
              <Divider sx={{ marginBottom: 1 }} />

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
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('Gas-EFI-Contact')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Get in Touch
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: 'flex', ml: { xs: 3, md: 0 } }}
                  color={'text.secondary'}
                  fontSize={15}
                >
                  {mock.date}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine5;
