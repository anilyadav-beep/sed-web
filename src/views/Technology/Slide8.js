import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ev from '../../assets/applications/PlainEV.jpg';
import powertools from '../../assets/applications/PT.jpg';
import Wiper from '../../assets/investors/Wiper.png';
import Steering from '../../assets/investors/Steering.png';
import icetw from '../../assets/applications/Motor_Bike.jpg';
import automotive from '../../assets/applications/Automotive.png';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
import Divider from '@mui/material/Divider';

const list1 = [
  {
    media: icetw,
    title: 'Small ICE Vehicles ',
    product1: 'ISG for 2/3 Wheelers',
    product2: '',
    link: '/isg'
  },
  {
    media: ev,
    title: 'Small EVs ',
    product1: 'Electric Bikes & Scooters',
    product2: '',
    link: '/traction-controllers'
  },
  {
    media: powertools,
    title: 'Power Tools',
    product1: 'Drills, Saws, Impact Wrenches ...',
    product2: '',
    link: '/products/power-tools'
  },
];

const list2 = [
  {
    media: Wiper,
    title: 'Wiper Motors & Seating ',
    product1: '',
    product2: '',
    link: '/isg'
  },
  {
    media: automotive,
    title: 'Large EVs ',
    product1: '',
    product2: '',
    link: '/traction-controllers'
  },
  {
    media: Steering,
    title: 'Power Steering',
    product1: '',
    product2: '',
    link: '/products/power-tools'
  },
  // {
  //   media: automotive,
  //   title: 'Automotive',
  //   product1: 'BLDC Wiper Motors',
  //   product2: 'Opportunity for xxM/year',
  //   //link: '/products-powertools'
  // },
];
const Slide8 = () => {
  //const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Technology');

  return (
    <Box>
      <Box marginBottom={4}>
       
        <Typography
          sx={{
            //textTransform: 'uppercase',
            fontWeight: '700',
          }}
          gutterBottom
          variant={'h6'}
          color={'danger'}
          align={'center'}
        >
        Our technology is ready for the following applications. <br /> Currently applicable to more than 100-150M-motors/years
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {list1.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
          >
            <Box 
              display={'block'} 
              component={'a'}
              //href={item.link}
              onClick={()=>gaEventTracker(item.title)}
              width={1} 
              height={1}
            >
              <Box
                //component={Card}
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
                    height: { xs: 240, sm: 340, md: 200 },
                    overflow: 'hidden',
                  }}
                />
                
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box marginY={0} >
                    <Typography variant={'subtitle2'} align={'center'} color="text.primary" sx={{ fontWeight: 700 }}>
                      {item.product1}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Typography
        sx={{
          //textTransform: 'uppercase',
          fontWeight: '700',
        }}
        marginBottom={3}
        variant={'h5'}
        color={'#A03811'}
        align={'center'}
      >
      More to follow
      </Typography>
      <Grid container spacing={3}>
        {list2.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
          >
            <Box 
              display={'block'} 
              component={'a'}
              //href={item.link}
              onClick={()=>gaEventTracker(item.title)}
              width={1} 
              height={1}
              
            >
              <Box
                //component={Card}
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
                    height: { xs: 240, sm: 340, md: 150 },
                    overflow: 'hidden',
                  }}
                />
                
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 700 }}>
                      {item.product1}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 500 }}>
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

export default Slide8;
