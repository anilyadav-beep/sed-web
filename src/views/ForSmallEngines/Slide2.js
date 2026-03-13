import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import abs from '../../assets/investors/ABSECU.png';
import efi from '../../assets/investors/EFIKit.png';
import isg from '../../assets/products/isg-kit.jpg';

const controls = [
  {
    media: efi,
    title: 'EFI: Regulation Driven ',
    product1: '',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/products/small-engines'
  },
  {
    media: isg,
    title: 'ISG: User Driven Value',
    product1: '',
    product2: 'Motor/Traction Controllers, Battery Management Systems.',
    link: '//small-evs'
  },
  {
    media: abs,
    title: 'ABS: Regulation Driven',
    product1: '',
    product2: 'Generator Controllers, ECUs for Gaseous FI, Battery Chargers & e-Governors.',
    link: '/products/generators'
  },
];

const Slide2 = () => {
  
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
          Three significant control technologies present in ICE 2Ws today
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {controls.map((item, i) => (
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
                    height: { xs: 200, sm: 200, md: 250 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'subtitle1'}
                    align={'center'}
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 500}}>
                      {item.product1}
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

export default Slide2;
