import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import powertools from '../../../../assets/applications/PT.jpg';
//import Chip from '@mui/material/Chip';
//import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={7} alignItems={'center'} order={{ xs: 2, md: 1 }}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
             Motor controllers with sensorless commutation <br /> {' '}
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
              >
                for battery-powered tools 
              </Typography>
            </Typography>
          </Box>
          {/* <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Motors used in all battery operated power tools will go sensorless over this decade. Benefit from SEDEMAC&apos;s unique offering to accelerate the sensorless transition of your power tools.
              <br />
            </Typography>
          </Box> */}
          {/* <Box
            display="right"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            marginTop={10}
          >
            <Typography variant="h6" color="text.secondary" marginRight={2} sx={{ fontWeight: 500 }}>
              Available for leading power tool makers in -
            </Typography>
            <Chip
              key="usa"
              label="USA"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            <Chip
              key="eu"
              label="Europe"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            <Chip
              key="japan"
              label="Japan"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            <Chip
              key="china"
              label="China"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
          </Box> */}
        </Box>
      </Grid>
      <Grid
        order={{ xs: 1, md: 1 }}
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={5}
        sx={{
          '& .lazy-load-image-background.lazy-load-image-loaded': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={powertools}
          alt="..."
          effect="blur"
          borderRadius={2}
          maxWidth={505}
          maxHeight={380}
          sx={{
            objectFit: 'cover',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
