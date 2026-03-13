import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container,useTheme, useMediaQuery, Box, Grid, Typography } from '@mui/material';
import gcu from './../../../../assets/applications/Genset.jpg';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  },[]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} alignItems={'center'} order={{ xs: 2, md: 1 }}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700 }}
               
              >
                Our products <br />are now used in <br /> &gt; 1 Million Generators
                <br />
              </Typography>
            </Box>
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
            src={gcu}
            alt="..."
            effect="blur"
            borderRadius={2}
            maxWidth={400}
            maxHeight={400}
            sx={{
              objectFit: 'cover',
              filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
