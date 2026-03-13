import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import smpllogo from '../../assets/logos/LogoH.png';
import AMT_TABLE from '../../assets/applications/AMT_TABLE.png';
import useAnalyticsEventTracker from 'googleAnalytics/useAnalyticsEventTracker';
// import TransmissionVideo from './videos/TransmissionVideo.mp4';
import {
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  Button,
  Modal,
  List,
  ListItem,
  NoSsr,
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import gc1k from '../../assets/applications/Transmission.png';
import Container from 'components/Container';
import { QRCodeCanvas } from 'qrcode.react';

//---
const mock = {
  image: gc1k,
  title: 'Signum: Two-Speed Automatic Transmission',
};

const mockData = [
  {
    subtitle:
      '...for a demonstrator of our sensorless commutation technology on an e-Bike of your choice.',
  },
];

const TransMission = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Top-Bar');
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log('git-----');
  const [openQR, setOpenQR] = useState(false);
  const currentURL = window.location.href;

  const downloadQR = () => {
    const canvas = document.getElementById('qrCode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'page_qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Box>
      {/* Top Logo Section */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width="100%"
        sx={{ boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.1)' }}
      >
        <Box
          display={'flex'}
          component="a"
          title="SEDEMAC"
          onClick={() => gaEventTracker('Home')}
          width={{ xs: 100, md: 120, padding: 7 }}
        >
          <Box
            component={'img'}
            src={smpllogo}
            height={50}
            width={150}
            sx={{ marginLeft: { xs: 1, md: 4 } }}
          />
        </Box>
      </Box>

      {/* Main Section */}
      <Container>
        <Box>
          <Box
            component={Card}
            width={1}
            height={1}
            boxShadow={0}
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row-reverse' }}
            sx={{ backgroundImage: 'none', marginTop: -5 }}
          >
            {/* Image Section */}
            <Box
              sx={{
                width: { xs: 1, md: '42%', marginTop: '10%' },
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
                  border: '1px',
                  borderColor: '#000000',
                  mt: -4,
                  marginLeft: 7,
                  objectFit: 'cover',
                  maxHeight: 360,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Box>

            {/* Content Section */}
            <CardContent
              sx={{
                width: { md: '58%', marginRight: 10, border: '1px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant={'h4'}
                  gutterBottom
                  sx={{
                    color: 'text-primary',
                    fontFamily: '"Century Gothic", sans-serif',
                    mt: 3,
                  }}
                >
                  {mock.title}
                </Typography>
              </Box>
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={AMT_TABLE}
                alt="..."
                sx={{
                  mt: 5,
                  marginBottom: '10%',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </CardContent>
          </Box>
        </Box>

        {/* Down Arrow */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: -7 }}>
          <NoSsr>
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={{ xs: 30, sm: 40 }}
              height={{ xs: 30, sm: 40 }}
              onClick={() => {
                const element = document.getElementById('transmission');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{ cursor: 'pointer' }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Box>
          </NoSsr>
        </Box>
      </Container>

      {/* Transmission Section */}
      <Container>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="transmission"
        >
          <Grid
            container
            spacing={4}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6}>
              <Box marginBottom={4}>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant={'h5'}
                  gutterBottom
                >
                  2 speed AMT
                </Typography>
                <Typography
                  variant={'h7'}
                  component={'p'}
                  color={'text.secondary'}
                  sx={{ fontWeight: 500 }}
                >
                  We have built a 2-spd AMT for e-powertrains, offering
                  reliable, smooth shifts which can offer a seamless performance
                  to the end-user with additional benefits associated with twin
                  speeds.
                  <br />
                  <br />
                  Accelerate the sensorless transition of motors in your
                  e-Bikes.
                </Typography>
              </Box>

              <List
                disablePadding
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                {mockData.map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <div className="btn-parent">
                      <Button
                        variant={'contained'}
                        sx={{ marginY: 2 }}
                        href="mailto:sales@sedemac.com"
                        onClick={() => gaEventTracker('e-Bikes-Tools-Contact')}
                      >
                        Get in Touch
                      </Button>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Video Section */}
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
            >
              <Box
                component={Card}
                boxShadow={4}
                height={300}
                width="100%"
                overflow="hidden"
                sx={{ borderRadius: 2 }}
              >
                <video
                  // src={TransmissionVideo}
                  width="100%"
                  height={300}
                  controls
                  autoPlay
                  loop
                  muted
                  className="rounded-2xl shadow-xl w-full max-w-3xl"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* QR Modal */}
      <Modal open={openQR} onClose={() => setOpenQR(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" mb={2}>
            Scan QR to open this page
          </Typography>
          <QRCodeCanvas
            id="qrCode"
            value={currentURL}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />
          <Typography mt={2} variant="body2">
            {currentURL}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: '#A03811', color: '#ffffff' }}
            onClick={downloadQR}
          >
            Download QR
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default TransMission;
