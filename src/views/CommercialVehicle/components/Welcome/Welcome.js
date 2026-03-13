import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import powergen from '../../../../assets/applications/Genset.jpg';
//import Chip from '@mui/material/Chip';
//import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const Hero = () => {
  const theme = useTheme();
  //const gaEventTracker = useAnalyticsEventTracker('Click-Generators');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'} order={{ xs: 2, md: 1 }}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Market Leading Products
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
              >
                for Generators
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            {/* <Typography variant="h6" component="p" color="text.secondary">
              500k Power Generators use SEDEMAC&apos;s 
              <br />
              Control Technologies &#38; Products.
            </Typography> */}
            <Typography variant="h6" component="p" color="text.secondary">
              We are the market leader in India and  
              <br />
              amongst the top-3, globally, by volume.
              <br />
              
            </Typography>
          </Box>
          {/* <Box
            display="left"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Typography variant="h6" color="text.secondary" marginRight={2} sx={{ fontWeight: 500 }}>
              Available for customers in -
            </Typography>
            <Chip
              key="india"
              label="India"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            <Chip
              key="america"
              label="North America"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            <Chip
              key="europe"
              label="Europe"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
            
            <Chip
              key="africa"
              label="Africa"
              component="a"
              size={'small'}
              color={'primary'}
              sx={{ marginBottom: 1, marginRight: 1 }}
            /> 
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Case studies
            </Button>
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
        md={6}
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
          src={powergen}
          alt="..."
          effect="blur"
          borderRadius={2}
          maxWidth={505}
          maxHeight={275}
          sx={{
            objectFit: 'cover',
            //boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
