import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ev from '../../../../assets/applications/smallEVs.jpg';
import powertools from '../../../../assets/applications/PT.jpg';
import { useTheme } from '@mui/material/styles';
import icetw from '../../../../assets/applications/Motor_Bike.jpg';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const mock = [
  {
    media: icetw,
    title: 'Small Engines ',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/isg'
  },
  {
    media: ev,
    title: 'Electric Vehicles ',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '/traction-controllers'
  },
  {
    media: powertools,
    title: 'Power Tools',
    product1: 'Drills, Saws, Impact Wrenches ...',
    product2: 'Motor Controllers with Sensorless Commutation.',
    link: '/products/power-tools'
  },
];
const Applications = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Technology');

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'danger'}
          align={'center'}
        >
        Our technology is ready for the following applications.<br /> More applications will follow soon ...
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
          >
            <Box 
              display={'block'} 
              component={'a'}
              href={item.link}
              onClick={()=>gaEventTracker(item.title)}
              width={1} 
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 250 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 700 }}>
                      {item.product1}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={5}
        >
          <Button
            component={'a'}
            variant="contained"
            color={'primary'}
            size="large"
            href={'mailto:sales@sedemac.com'}
          >
            <text style={{color:"#ffffff"}}>Get in Touch</text>
          </Button>
        </Box>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: 500 }}
          align={'center'}
          marginTop={2}
        >
        ... for knowing more about Sensorless Control Technology and its applicability to various motor topologies.
        </Typography>
      </Box>
    </Box>
  );
};

export default Applications;
