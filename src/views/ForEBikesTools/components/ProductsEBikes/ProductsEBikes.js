import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import hubDrive from '../../../../assets/products/20230616-Hub-Drive.png';
import midDrive from '../../../../assets/products/20230616-Mid-Drive.png';
import ProductCard from 'common/ProductCard';

const mock = [
  {
    media: hubDrive,
    title: 'ISAAC - Traction Controllers',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/hub-drive',
  },
  {
    media: midDrive,
    title: 'Custom Controllers for Mid-Drive Units',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '/mid-drive'
  }
];
const Applications = () => {
  return (
    <Box>
      <Box marginBottom={4}>
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
      <Grid container display="flex" justifyContent="center" spacing={4}>
        {mock.map((item, i) => (
          <ProductCard item={item} i={i} key={i} fromEBikes="EBikes" />
        ))}
      </Grid>
    </Box>
  );
};
export default Applications;