import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import Media from 'common/Media';
const mock = [
  {
    subtitle:
      '...for a demonstrator of our sensorless commutation technology on a tool of your choice.',
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
        <Grid item xs={12} md={5}>
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
              We have built a compelling proposition for motors on
              battery-powered tools to go sensorless over this decade. Benefits
              include improved reliability, improved performance &#40;sinusoidal
              commutation at higher speeds&#41;, and opportunities for cost
              &amp; space optimization.
              <br />
              <br />
              Accelerate the sensorless transition of motors in your tools.
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
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {/* <Button
                  variant={'contained'}
                  sx={{ marginY: 2 }}
                  href="mailto:sales@sedemac.com"
                  onClick={() => gaEventTracker('Power-Tools-Contact')}
                >
                  <span style={{ color: '#ffffff' }}>Get in Touch</span>
                </Button> */}
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
                    onClick={() => gaEventTracker('Power-Tools-Contact')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Get in Touch
                    </Typography>
                  </Button>
                </Box>
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
          md={7}
          sx={{
            display: { xs: 'flex', md: 'flex' },
          }}
        >
          <Box container display="flex" justifyContent="center" spacing={2}>
            <Media type="pTools" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSales;
