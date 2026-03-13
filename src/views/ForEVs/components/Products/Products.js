import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import isaac from '../../../../assets/products/ISAAC1500NEW.png';
import logan from '../../../../assets/products/LOGAN-Main.png';
import ProductCard from 'common/ProductCard';

const mock = [
  {
    media: isaac,
    title: 'ISAAC - MCUs [300W to 28kW]',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/traction-controllers',
    tag: 'Key Product',
  },
  {
    media: logan,
    title: 'Logan - Motors [2kW to 3.5kW]',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor.',
    link: '/motors',
    tag: 'Key Product',
  },
];

const Applications = () => {
  return (
    <Box>
      <Box>
        <Typography
          mb={2}
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
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {mock.map((item, i) => (
          <ProductCard item={item} i={i} key={i} fromEVS="EVS" />
        ))}
      </Grid>
    </Box>
  );
};

export default Applications;
