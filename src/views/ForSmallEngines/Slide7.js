import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import efi from '../../assets/products/EFI.jpg';
import isg from '../../assets/products/ISG.jpg';
import tci from '../../assets/products/TCI.png';

const traction = [
  {
    media: isg,
    title: 'ISG ',
    product1: 'We pioneered ISG in India in 2018.',
    product2: 'Now supply 250k+ controllers per month. ',
    product3: 'Will shortly supply magnetos.'
  },
  {
    media: efi,
    title: 'ISG+EFI',
    product1: 'Started series-production in 2022.',
    product2: 'Now supply >20k controllers per month.',
    product3: ''
  },
  {
    media: tci,
    title: 'VRR + TCI',
    product1: 'Also supply regulators, ignition controllers',
    product2: 'For export markets of our Indian customers.',
    product3: 'Will get cannibalized by our ISG & EFI offerings.'
  },
];

const Slide7 = () => {
  
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
        {traction.map((item, i) => (
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
                    align={'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 700}} align={'center'}>
                      {item.product1}
                    </Typography>
                  </Box>
                  
                  <Box marginTop={1}>
                    <Typography variant={'h7'} color="text.primary" align={'center'} sx={{ fontWeight: 700}}>
                      {item.product2}
                    </Typography>
                  </Box>
                  <Box  marginTop={1}>
                    <Typography variant={'subtitle2'} color="text.secondary" align={'center'}>
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

export default Slide7;
