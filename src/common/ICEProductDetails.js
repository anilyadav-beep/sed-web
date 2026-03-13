import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';

const ICEProductDetails = ({ mock, type }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-GCU');
  return type === 'ICE' ? (
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
              <Typography
                variant={'subtitle1'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                for{' '}
                <Link href="/products/small-engines" color="primary">
                  {' '}
                  ICE Powered Motorcycles/Scooters
                </Link>{' '}
                &amp;{' '}
                <Link href="/outdoor-powered-equipment" color="primary">
                  OPE
                </Link>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                {mock.description}{' '}
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Uses our{' '}
                  <span style={{ textDecoration: 'underline' }}>
                    {' '}
                    sensorless commutation (SLC) technology{' '}
                  </span>{' '}
                  i.e., no hall effect sensors are required in magnetos → ISG
                  adoption possible on all vehicles including motorcycles with
                  wet magnetos, without changes to the engine crank case.
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  {' '}
                  <Link href="/blog/isgefi" color="primary">
                    Optional integration of ISG Electronics with EFI ECU
                    electronics.
                  </Link>
                </li>
              </Typography>
            </Box>
            <Box>
              <Divider sx={{ my: 1 }} />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'row', sm: 'row' }} // responsive layout
                gap={{ xs: 1, sm: 0 }}
              >
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
                    onClick={() =>
                      gaEventTracker('ISG-Contact')
                    }
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
                  In Production Since 2018
                  <br />
                  On over 7.5 Million Vehicles
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  ) : type === 'ICE2' ? (
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
              width: { xs: 1, md: '52%' },
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
                <Link href="/products/small-engines" color="primary">
                  ICE Powered Motorcycles/Scooters
                </Link>{' '}
                &amp;{' '}
                <Link href="/outdoor-powered-equipment" color="primary">
                  OPE
                </Link>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                SEDEMAC is amongst the very few companies worldwide that offers
                an integrated organic ISG+EFI control solution for single/twin
                cylinder Gasoline/Gas powered ICE vehicles meeting stringent
                Bharat Stage -VI OBD Stage II-B / Euro - V - II norms. The integration of two of these
                complex controllers enables a cost effective elimination of
                starter motors.{' '}
              </Typography>
              {/* <Typography color="text.secondary"><li>Uses our <Link href='/technology' color="inherit"> sensorless commutation technology </Link> i.e., no hall effect sensors used in magnetos → benefits of ISG to all vehicles including motorcycles with wet magnetos &amp; without changes to the engine crank case.</li></Typography> */}
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Uses our{' '}
                  <span style={{ textDecoration: 'underline' }}>
                    {' '}
                    sensorless commutation (SLC) technology{' '}
                  </span>{' '}
                  i.e., no hall effect sensors are required in magnetos → ISG
                  adoption possible on all vehicles including motorcycles with
                  wet magnetos, without changes to the engine crank case.
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Strategies to meet Bharat Stage - VI / EURO - V - II emission norms, OBD Stage II-B and
                  dynamic performance requirements of 2/3 wheeled vehicles
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Works with a wide range of makes of other EFI system
                  components such as Gasoline/Gas injectors, fuel pump, oxygen
                  sensor(s) and TMAP sensor
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>Supports battery-less push / kick starts</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Option of eliminating the throttle position sensor (TPS) from
                  the system
                </li>
              </Typography>
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
                    sx={{ display: 'flex' }}
                    onClick={() => gaEventTracker('ISG-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
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
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('ISG-Contact')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Get in Touch
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: 'flex', ml: { xs: 5, md: 0 } }}
                  color={'text.secondary'}
                  fontSize={15}
                >
                  In Production Since 2024
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  ) : type === 'ICE3' ? (
    <Box maxHeight={'auto'}>
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
              label="BS VI / EURO 5 Compliant"
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
                <Link href="/products/small-engines" color="primary">
                  ICE Powered Motorcycles/Scooters
                </Link>{' '}
                &amp;{' '}
                <Link href="/outdoor-powered-equipment" color="primary">
                  OPE
                </Link>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                Implements the necessary hardware and software logics to enable
                control of 1 or 2 cylinder electronic fuel injected engines
                towards meeting legislative emission/OBD requirements while
                ensuring excellent drivability performance under wide operating
                conditions.{' '}
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Strategies to meet Bharat Stage VI (EURO - V) emission norms and
                  OBD Stage II-B requirements for both Gasoline/Gas engines.
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Works with a wide range of makes of other EFI system
                  components such as injector, fuel pump, oxygen sensor and TMAP
                  sensor. Supports without battery starts.
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  {' '}
                  <Link href="/blog/isgefi" color="primary">
                    Optional integration of ISG Electronics with EFI ECU
                    electronics.
                  </Link>
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  Option to integrate OEM-specific custom logics e.g. idling
                  stop.
                </li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>
                  <Link
                    href="https://youtu.be/P7kfJzFj_Es"
                    target="blank"
                    color="primary"
                  >
                    {' '}
                    Option of throttle position sensor (TPS) elimination.
                  </Link>
                </li>
              </Typography>
            </Box>
            {/* <Box>
              <Divider sx={{ marginY: 1 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={{ xs: 0, md: 0 }}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Button
                    variant="contained"
                    text-color="inherit"
                    color="primary"
                    size="small"
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{ display: 'flex' }}
                    onClick={() => gaEventTracker('EFI-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
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
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('EFI-Contact')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Get in Touch
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: { xs: 'flex', md: 'flex' } }}
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
  ) : (
    <Box maxHeight={'auto'}>
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
            {/* <Chip
              label="VRR"
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'background.paper',
              }}
            /> */}
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
                <Link href="/products/small-engines" color="primary">
                  ICE Powered Motorcycles/Scooters
                </Link>
              </Typography>

              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>
              {/* <br /> */}
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature1}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature2}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature3}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature4}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature5}</li>
              </Typography>
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
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    onClick={() => gaEventTracker('VRR-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: { xs: 'flex', md: 'flex' } }}
                  color={'text.secondary'}
                >
                  {mock.date}
                </Typography>
              </Box>
            </Box> */}
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
                    target="_blank"
                    sx={{ display: 'flex' }}
                    onClick={() =>
                      gaEventTracker('Battery-Charger-Download-Brochure')
                    }
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
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
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() =>
                      gaEventTracker('Battery-Charger-Download-Brochure')
                    }
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Get in Touch
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: { xs: 'flex', md: 'flex' } }}
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

export default ICEProductDetails;
