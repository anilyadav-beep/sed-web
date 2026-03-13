import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BOSCHAnnualReport from '../../assets/brochures/20230920-BOSCHAnnualReport.pdf';
// import innovativeControlBrochure from '../../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
// import Media from 'common/Media';


const Slide1 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Power-Tools');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <br />
            <br />
            <br />
            <Typography sx={{ fontWeight: 700 }} variant={'h5'} gutterBottom>
              SEDEMAC Investor Call #4 | Jan 2024
            </Typography>
            <Typography
              variant={'h7'}
              component={'p'}
              color={'text.secondary'}
              sx={{ fontWeight: 500 }}
            >
              <br />
              <br />
              <br />
             00:00:00 - 00:12:22 - Introduction |<br /> 
             00:12:22 - 00:45:22 - Products & Technologies |<br /> 
             00:45:22 - 00:54:17 - Why are we Winning | 
             00:54:17 - 01:05:38 - Numbers | 
             01:05:38 - 01:14:58 - Investment Case | 
             01:14:58 - 01:38:13 - Q&A <br />
              <br />
              <br />
              <Button
                component="a"
                href={BOSCHAnnualReport}
                download
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                size="small">
                  Download PPT
              </Button>
              <br />
              <br />
              <br />
            </Typography>
          </Box>
          <List
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
           
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'flex', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            {/* <Media type="eBike" /> */}
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={250}
              src="https://www.youtube.com/embed/l5iA_kHUdaM?si=K1NZvqjZWGAG8-Fk"
              onClick={() => gaEventTracker('Power-Tools-Watch')}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              borderRadius={2}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Slide1;
