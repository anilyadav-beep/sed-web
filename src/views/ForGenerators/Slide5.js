import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import OtherProducts from '../../assets/investors/OtherProductsGenset.png';
import GC1k from '../../assets/products/GC1k.jpg';
import GasEFI from '../../assets/products/GENERAC_LSI.jpg';

const mock = [
  {
    media: GC1k,
    title: 'Genset Controllers',
    product1: 'Started supplies in 2014.',
    product2: 'Current run rate >150K+ genset controllers per year; #2/#3 by volume globally.',
    product3: ' '
  },
  {
    media: GasEFI,
    title: 'EFI ECUs for gaseous gensets',
    product1: 'We supply to North American majors, significant volume ramp-up potential',
    product2: '',
    product3: ''
  },
  {
    media: OtherProducts,
    title: 'Other genset products',
    product1: 'We supply electronic governors, battery chargers & more',
    product2: '',
    product3: ''
  },
  
];

const Slide5 = () => {
  
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          color={'black'}
          variant="h4"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Traction
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
                    height: { xs: 200, sm: 200, md: 200 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'subtitle1'}
                    align={'left'}
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 500}}>
                      {item.product1}
                    </Typography>
                  </Box>
                  
                  <Box display={'flex'} alignItems={'center'} marginTop={1}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.product2}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} marginTop={1} sx={{ fontWeight: 700}}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.product3}
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

export default Slide5;
