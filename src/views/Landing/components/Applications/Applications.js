import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import powergen from '../../../../assets/applications/GensetComplete.png';
import eBike from '../../../../assets/applications/eBike.jpg';
import icetw from '../../../../assets/applications/Motor_Bike.jpg';
import ev from '../../../../assets/applications/EVComplete.jpg';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';


const mock = [
  {
    media: icetw,
    title: 'for Small Engines ',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/products/small-engines'
  },
  {
    media: ev,
    title: 'for Small EVs ',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '//small-evs'
  },
  {
    media: eBike,
    title: 'for e-Bikes',
    product1: 'Hub & Mid Drivetrains',
    product2: 'Custom Controllers for Mid-Drive Units & Traction Controllers for Hub Motors.',
    link: '/products/e-bikes'
  },
  {
    media: powergen,
    title: 'for Generators',
    product1: 'Diesel / Gas Powered ',
    product2: 'Generator Controllers, ECUs for Gaseous FI, Battery Chargers & e-Governors.',
    link: '/products/generators'
  },
];

const Applications = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Landing-Applications');
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          color={'#A03811'}
          variant="h4"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          PRODUCTS
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={3}
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
                    height: { xs: 200, sm: 200, md: 200 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 800 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 700 }}>
                      {item.product1}
                    </Typography>
                  </Box>
                  
                  <Box display={'flex'} alignItems={'center'} marginTop={1}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.product2}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Applications;
