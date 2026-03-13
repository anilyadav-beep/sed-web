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
import Container from 'components/Container';

const mock = [
  {
    subtitle:
      '...for deploying ISAAC-Series Controllers with our sensorless commutation technology your vehicle.',
  },
];

const ContactSales = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-ISAAC-Video');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container paddingY={-2}>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box marginBottom={4}>
              <Typography sx={{ fontWeight: 700 }} variant={'h5'} gutterBottom>
                Transition to sensorless controls
              </Typography>
              <Typography
                variant={'h7'}
                component={'p'}
                color={'text.secondary'}
                sx={{ fontWeight: 500 }}
              >
                Improve reliability of your Electric Vehicles by eliminating
                physical rotor-position sensors from your vehicle&apos;s
                traction motors.
                <br />
                <br />
                <br />
                Connect with us, for deploying ISAAC-Series Traction Controllers
                on your vehicles.
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
                  // data-aos="fade-up"
                  // data-aos-delay={index * 100}
                  // data-aos-offset={100}
                  // data-aos-duration={600}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* <Button
                  variant={'contained'}
                  sx={{ margin: 2 }}
                  href="mailto:sales@sedemac.com"
                  onClick={() => gaEventTracker('ISAAC-Contact')}
                >
                  <text style={{ color: '#ffffff', textAlign: 'center' }}>
                    Get in Touch
                  </text>
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
                      onClick={() => gaEventTracker('ISAAC-Contact')}
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
              <Media type="Tansition" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactSales;
