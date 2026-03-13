import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import innovativeControlBrochure from '../../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import Media from 'common/Media';
const mock = [
  {
    subtitle:
      '...for a demonstrator of our sensorless commutation technology on an e-Bike of your choice.',
  },
];

const ContactSales = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Power-Tools');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h5'} gutterBottom>
              Transition to sensorless motors
            </Typography>
            <Typography
              variant={'h7'}
              component={'p'}
              color={'text.secondary'}
              sx={{ fontWeight: 500 }}
            >
              We have built a compelling proposition for motors on e-Bikes to go
              sensorless over this decade. Optionality in engagement models for
              ease of adoption. Benefits include improved reliability and
              opportunities for cost optimization.
              <br />
              <br />
              Accelerate the sensorless transition of motors in your e-Bikes.
            </Typography>
          </Box>
          <List
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {mock.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div className="btn-parent">
                  <Button
                    variant={'contained'}
                    sx={{ marginY: 2 }}
                    href="mailto:sales@sedemac.com"
                    onClick={() => gaEventTracker('e-Bikes-Tools-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Get in Touch</text>
                  </Button>
                  <Button
                    className="d-brochure-btn"
                    variant={'contained'}
                    sx={{ margin: 2 }}
                    href={innovativeControlBrochure}
                    target="_blank"
                    onClick={() => gaEventTracker('ISAAC-Contact')}
                  >
                    <text style={{ color: '#ffffff' }}>Download Brochure</text>
                  </Button>
                </div>
                <ListItemText secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={4}
          sx={{
            display: { xs: 'flex', md: 'flex' },
          }}
        >
          <Box container display="flex" justifyContent="center" spacing={2}>
            <Media type="eBike" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSales;
