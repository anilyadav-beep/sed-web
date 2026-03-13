import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import isg from '../../../../assets/products/isg-kit.png';
import efi from '../../../../assets/products/EFI-Black.png';
import isgefi from '../../../../assets/products/ISGEFI.png';
import vrr from '../../../../assets/products/VRR.png';
import ProductCard from 'common/ProductCard';

const mock2 = [
  {
    media: isg,
    title: 'Sensorless Integrated Starter Generators',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/isg',
    tag:'Key Product'
  },
  {
    media: isgefi,
    title: 'ISG + EFI ECUs for Fuel Injection',
    product1: 'Electric Bikes & Scooters',
    link: '/isgefi',
    tag:'Key Product'
  },
  {
    media: efi,
    title: 'EFI ECUs for Fuel Injection',
    product1: 'Electric Bikes & Scooters',
    link: '/efi',
    tag:'Key Product'
  },
  {
    media: vrr,
    title: 'Voltage Regulators',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/vrr'
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
