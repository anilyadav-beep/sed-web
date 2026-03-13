/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Gallary from '../Gallery';
import Container from 'components/Container';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction={isMd ? 'row' : 'column'}
          spacing={4}
        >
          {/* TEXT SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="column"
            justifyContent="center"
            alignItems={isMd ? "flex-start" : "center"}
          >
            <Box mt={5} maxWidth="600px">
              <Typography component="p" color="text.primary" textAlign="start">
                At its core, SEDEMAC is the coming together of{' '}
                <b style={{ color: '#A03811' }}>talented engineers</b> with the
                zeal for development and large scale deployment of innovative
                control technologies &amp; products.
                <br />
                <br />
                <b style={{ color: '#A03811' }}>
                  Founded in a lab at the Indian Institute of Technology, Bombay
                </b>
                ; we currently have world-class development &amp; manufacturing
                facilities in Pune, India. Our products are now used on{' '}
                <b style={{ color: '#A03811' }}>
                  millions of vehicles and other equipment world-wide
                </b>
                .
                <br />
                <br />
                We sell innovative and{' '}
                <b style={{ color: '#A03811' }}>critical-to-the-application</b>{' '}
                control products, incorporating{' '}
                <b style={{ color: '#A03811' }}>
                  fresh control technologies conceived and developed in-house
                </b>
                , to leaders of large markets.
                <br />
                <br />
                We pride ourselves on having been able to{' '}
                <b style={{ color: '#A03811' }}>
                  institute a culture which allows creative engineers to
                  flourish
                </b>
                . A culture which values creativity, diligence, being bold,
                honesty, focus on what is being said as opposed to who is saying
                it and respect for the individual.
              </Typography>
            </Box>
          </Grid>

          {/* GALLERY SECTION */}
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%">
              <Gallary />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhoWeAre;
