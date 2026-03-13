import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import isg from '../../../../assets/products/ISG.jpg';
import efi from '../../../../assets/applications/ISGEFI.png';
import Logan from '../../../../assets/products/LOGAN-Main.png';
import ISAAC from '../../../../assets/products/Isaac.jpg';
import Chip from '@mui/material/Chip';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const mock2 = [
  {
    media: isg,
    title: 'Sensorless Integrated Starter Generators',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/isg',
    tag: 'Key Product',
  },
  {
    media: efi,
    title: 'ECUs for Fuel Injection',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '/isgefi',
    tag: 'Key Product',
  },
  {
    media: ISAAC,
    title: 'ISAAC - MCUs [300W to 28kW]',
    product1: 'Diesel / Gas Powered ',
    product2:
      'Generator Controllers, ECUs for Gaseous FI, Battery Chargers & e-Governors.',
    link: '/traction-controllers',
    tag: 'Key Product',
  },
  {
    media: Logan,
    title: 'Logan Series Motors [2kW to 3.5kW]',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/motors',
    tag: 'Key Product',
  },
];

const Applications = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker(
    'Click-Small-Engine-Products',
  );
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          color={'#A03811'}
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          sx={{
            fontWeight: 700,
          }}
        >
          PRODUCTS
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock2.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={item.i}
            data-aos={'fade-up'}
            data-aos-delay={item.i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              component={'a'}
              href={item?.link}
              onClick={() => gaEventTracker(item?.title)}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(0.5)})`,
                },
              }}
            >
              <Card
                sx={{
                  width: 1,
                  height: 1,
                  boxShadow: 1,
                  // boxShadow: '2px 1px 3px rgba(0.2, 0.2, 0.2, 0.2)',
                  // transition:
                  //   'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                  // '&:hover': {
                  //   transform: 'translateY(-1px)',
                  //   boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)',
                  // },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  title={item?.title}
                  image={item?.media}
                  sx={{
                    objectFit: { xs: 'contain', md: 'cover' }, // full image on mobile, cropped on desktop
                    width: '100%',
                    height: { xs: 180, sm: 200, md: 300 },
                    bgcolor: '#ffffff', // background for transparency
                    // borderBottom: '1px solid #eee',
                  }}
                />
                <Chip
                  label={item?.tag}
                  sx={{
                    position: 'absolute',
                    top: 30,
                    right: 20,
                    bgcolor: 'background.paper',
                  }}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box textAlign="center">
                    <Typography
                      variant="h7"
                      sx={{ fontWeight: 800, color: '#A03811' }}
                    >
                      {item?.title}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Applications;
