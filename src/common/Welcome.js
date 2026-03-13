import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
import powergen from '../assets/applications/Genset.png';
import ICEProd from '../assets/applications/ICEProd.png';
import Evs from '../assets/applications/e2WNew.png';
import powerTool from '../assets/applications/PT.png';
import OPE from '../assets/applications/OPE.png';
import ACE from '../assets/applications/ACE.png';
import linkedIn_1 from '../assets/applications/linkedIn_1.png';
import LinkedIn_7M from '../assets/applications/LinkedIn_7M.png';
import Million_8_GIF from '../assets/applications/million_GIF.gif';
import { Card } from '@mui/material';
import { Main } from 'layouts';
import useAnalyticsEventTracker from 'googleAnalytics/useAnalyticsEventTracker';

const Welcome = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const words = ['Diesel', 'Gas'];
  const [index, setIndex] = useState(0);
  const gaEventTracker = useAnalyticsEventTracker('Click-About-Us');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const items = [
    {
      label: 'Small Engine-Powered Vehicles',
      img: ICEProd,
      link: '/products/small-engines',
    },
    { label: 'Small Electric Vehicles', img: Evs, link: '/products/small-evs' },
    {
      label: 'Commercial Vehicles',
      img: ACE,
      link: '/products/commercial-vehicles',
    },
  ];
  const items2 = [
    { label: 'Generators', img: powergen, link: '/products/generators' },
    { label: 'Power tools', img: powerTool, link: '/products/power-tools' },
    {
      label: 'Outdoor Powered Equipment',
      img: OPE,
      link: '/products/outdoor-powered-equipment',
    },
  ];

  const mileStone = [
    {
      label: 'Small Engine-Powered Vehicles',
      img: linkedIn_1,
      link: 'https://www.linkedin.com/posts/sedemac-mechatronics_we-are-glad-to-share-that-our-quarterly-revenue-activity-7346047509191872514-BEf-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuoEF8BFIXdWTqhSg0CN4GVAWOeZvSv_Zk',
    },
    {
      label: 'Small Engine-Powered Vehicles',
      img: LinkedIn_7M,
      link: 'https://www.linkedin.com/posts/sedemac-mechatronics_milestone-growth-agnostic-activity-7318248259926302721-M9mu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuoEF8BFIXdWTqhSg0CN4GVAWOeZvSv_Zk',
    },
    {
      label: 'Small Engine-Powered Vehicles',
      img: Million_8_GIF,
      link: 'https://www.linkedin.com/posts/sedemac-mechatronics_we-are-glad-to-share-that-we-have-now-shipped-activity-7348584236972498944-slfy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuoEF8BFIXdWTqhSg0CN4GVAWOeZvSv_Zk',
    },
    // {
    //   label: 'Small Engine-Powered Vehicles',
    //   img: LinkedIn_7M,
    //   link: '/products/small-engines',
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // swap every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return props.typed === 'Landing' ? (
    <Main>
      <Box
        minHeight="80vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt:1,
          textAlign: 'center',
          p: { xs: 3, md: 7 },
          backgroundColor: '#fff',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color={'#A03811'}
          paddingX={{xs:8,md:0}}
        >
          Innovative, Reliable Control Products for
        </Typography>
        <Box>
          <Box
            maxWidth={'100%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              container
              paddingX={3}
              justifyContent="center"
              spacing={4} // <-- this adds space between parent cards
              width="100%"
              paddingY={6}
            >
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    width: '100%',
                    p: 1,
                    borderRadius: 3,
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#A03811', fontWeight: 'bold', mb: 1 }}
                  >
                    Mobility
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {items.map((item, i) => (
                      <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box textAlign="center">
                          <Card
                            onClick={() => navigate(item.link)}
                            sx={{
                              height: 200,
                              borderRadius: 4,
                              cursor: 'pointer',
                              overflow: 'hidden',
                              backgroundColor: '#ffe3ccff',
                              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                              transition:
                                'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-1px)',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                              },
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <Box
                              component="img"
                              src={item.img}
                              alt={item.label}
                              sx={{
                                width: '100%',
                                height: 130,
                                objectFit: 'contain',
                                display: 'block',
                                mt: 1,
                              }}
                            />

                            <Box
                              sx={{
                                p: 1,
                                pt: 0,
                                textAlign: 'center',
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: '8px',
                                  textTransform: 'capitalize',
                                  color: 'text.primary',
                                }}
                              >
                                <b>{item.label}</b>
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    width: '100%',
                    p: 1,
                    borderRadius: 3,
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#A03811', fontWeight: 'bold', mb: 1 }}
                  >
                    Industrial
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {items2.map((item, i) => (
                      <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box textAlign="center">
                          <Card
                            onClick={() => navigate(item.link)}
                            sx={{
                              height: 200,
                              borderRadius: 4,
                              cursor: 'pointer',
                              overflow: 'hidden',
                              backgroundColor: '#ffe3ccff',
                              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                              transition:
                                'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-1px)',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                              },
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <Box
                              component="img"
                              src={item.img}
                              alt={item.label}
                              sx={{
                                width: '100%',
                                height: 130,
                                objectFit: 'contain',
                                display: 'block',
                                mt: 1,
                              }}
                            />

                            <Box
                              sx={{
                                p: 1,
                                pt: 0,
                                textAlign: 'center',
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: '8px',
                                  textTransform: 'capitalize',
                                  color: 'text.primary',
                                }}
                              >
                                <b>{item.label}</b>
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Main>
  ) : (
    <Grid container spacing={4}>
      <Grid
        item
        container
        xs={12}
        md={props.typed ? 6 : 7}
        alignItems={'start'}
        order={{ xs: 2, md: 1 }}
      >
        {props.typed === 'Tech' ? (
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                }}
              >
                First-ever{' '}
                <Typography
                  component={'span'}
                  variant={'inherit'}
                  color={'primary.dark'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.0,
                    )} 0%)`,
                  }}
                >
                  sensorless motor commutation
                </Typography>{' '}
                that works{' '}
                <Typography
                  component={'span'}
                  variant={'inherit'}
                  color={'primary.dark'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.0,
                    )} 0%)`,
                  }}
                >
                  reliably at zero/low as well as high speeds.
                </Typography>
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
              >
                This fundamental technology,{' '}
                <b>relevant to 0.5-billion motors/year</b> is now used by over{' '}
                <b>7-million vehicles</b>, since its launch 2018.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box>
              <Typography
                variant="h3"
                color={
                  props.typed === 'evs' || props.typed === 'generator'
                    ? '#000000'
                    : 'text.primary'
                }
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                {props.typed === 'evs' ? (
                  <Box mt={{xs:0, md:3}} ml={{xs:0, md:0}}>
                    {props.headerText1}
                    {/* <br /> */}
                    {props.headerText3}
                  </Box>
                ) : props.typed === 'generator' ? (
                  props.headerText1
                ) : (
                  <>
                    {' '}
                    {props.headerText1}{' '}
                    {props.typed === 'ecBike' ? <br /> : null}
                  </>
                )}{' '}
                <Typography
                  color={
                    props.typed === 'evs' ||
                    props.typed === 'generator' ||
                    props.typed === 'vehicles'
                      ? '#000000'
                      : 'primary.dark'
                  }
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.0,
                    )} 0%)`,
                  }}
                >
                  {props.typed === 'generator' ? (
                    <>
                      <Typed
                        style={{ color: '#A03811' }}
                        strings={['Diesel', 'Gas']}
                        typeSpeed={80}
                        loop={true}
                        showCursor={false}
                      />
                      <br />
                      <span sx={{ color: '#000000' }}> Powered Generators</span>
                    </>
                  ) : null}
                  {props.typed !== 'generator' &&
                  props.typed !== 'power-tool' &&
                  props.typed !== 'ope' &&
                  props.typed !== 'vehicles'
                    ? props.headerText2
                    : null}
                  {props.typed === 'evs' ? (
                    <>
                      <Typed
                        style={{ color: '#A03811' }}
                        strings={['Motorcycles', 'Scooters', 'Rickshaws']}
                        typeSpeed={80}
                        loop={true}
                        showCursor={false}
                      />
                    </>
                  ) : null}

                  {props.typed === 'vehicles' ? (
                    <>
                      {/* <span style={{ color: '#000000' }}>
                        {props.headerText2}
                      </span> */}
                      <Typed
                        style={{ color: '#A03811' }}
                        strings={['LCVs', 'MHCVs']}
                        typeSpeed={80}
                        loop={true}
                        showCursor={false}
                      />
                    </>
                  ) : null}
                  {props.typed === 'ecBike' ? (
                    <Typed
                      strings={['Bikes', 'Scooters', 'Rickshaws', 'LCVs']}
                      typeSpeed={80}
                      loop={true}
                      showCursor={false}
                    />
                  ) : null}
                  {props.typed === 'power-tool' ? (
                    <Box>
                      <span style={{ color: '#000000' }}>
                        {props.headerText2}
                      </span>
                      {/* <br /> */}{' '}
                      <Typed
                        strings={['Drills', 'Saws', 'Wrenches']}
                        typeSpeed={80}
                        loop={true}
                        showCursor={false}
                      />
                    </Box>
                  ) : null}
                  {props.typed === 'ope' ? (
                    <>
                      <span style={{ color: '#000000' }}>
                        {props.headerText2}
                      </span>
                      <br />
                      <Typed
                        strings={['Lawn Mowers', 'Tractors', 'Snow Blowers']}
                        typeSpeed={80}
                        loop={true}
                        showCursor={false}
                      />
                    </>
                  ) : null}
                </Typography>
              </Typography>
            </Box>
            {props?.descText1 ? (
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="text.secondary">
                  <br />
                  {props?.descText1}
                  <br />
                  {/* {props?.descText2}
                  <br /> */}
                </Typography>
              </Box>
            ) : null}
          </Box>
        )}
      </Grid>
      <Grid
        order={{ xs: 1, md: 1 }}
        // item
        // container
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={5}
        mt={-5}
        ml={{ md: 12, xs: 5 }}
      >
        <Box
          component={LazyLoadImage}
          src={props.evapplication}
          alt="Application Visual"
          effect="blur"
          borderRadius={2}
          sx={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: 420, // ✅ Keeps real image size
            objectFit: 'contain',
            display: 'block',
            mx: 'auto',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Welcome;
