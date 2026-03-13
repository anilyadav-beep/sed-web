import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import gc1k from '../../../../assets/products/GC1k.png';
import LSI from '../../../../assets/products/GENERAC_LSI.png';
import batchg from '../../../../assets/products/BatChg.png';
import eGov from '../../../../assets/products/eGov.png';
import ProductCard from 'common/ProductCard';

const mock2 = [  
  {
    media: gc1k,
    title: 'Generator Controllers',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/gcu',
    tag:'Key Product'
  },
  {
    media: LSI,
    title: 'ECUs for Fuel Injection',
    product1: 'Electric Bikes & Scooters',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '/gas-genset-fuel-injection',
    tag:'Key Product'
  },
  {
    media: batchg,
    title: 'Battery Chargers',
    product1: 'Diesel / Gas Powered ',
    product2: 'Generator Controllers, ECUs for Gaseous FI, Battery Chargers & e-Governors.',
    link: '/battery-chargers'
  },
  {
    media: eGov,
    title: 'Engine Controllers & Governors',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/e-gov'
  },
];

const Applications = () => {
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
          <ProductCard item={item} i={i} key={i} />
        ))}
      </Grid>
    </Box>
  );
};
export default Applications;
