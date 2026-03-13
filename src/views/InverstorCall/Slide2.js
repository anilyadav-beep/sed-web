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
              SEDEMAC Investor Call #5 | July 2024
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
              00:00:00 - 00:03:00 Introduction |  <br />
              00:03:00 - 00:08:03 What is SEDEMAC, Key Products |  <br />
              00:08:03 - 00:09:14 Key Numbers |  <br />
              00:09:14 - 00:18:17 Why are we winning? / Product Roadmap |  <br />
              00:18:17 - 00:26:11 Financial Details, Preposition to Investors |  <br /> 
              00:26:11 - 00:31:45 Key Risks | 00:31:45 - 01:02:37 Q&A
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
              src="https://www.youtube.com/embed/eiB_keNEVdk?si=331S9p4TQvbOYsmF"
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
