import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import SRM from '../../assets/investors/SRM.png';
import Ursa from '../../assets/investors/UrsaDisplay.png';

const EVFuture = [
  {
    media: SRM,
    title: 'Rare-earth free motors',
    subtitle: 'Demo in Dec 2022.',
  },
  {
    media: Ursa,
    title: 'Offering full-suite of electronics',
    subtitle: 'Motor controllers, BMS & DC-DC.',
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
          What is coming?
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {EVFuture.map((item, i) => (
          <Grid
            item
            xs={12}
            md={6}
            key={i}
          >
            <Box 
              display={'block'} 
              component={'a'}
              width={1} 
              height={1}
            >
              <Box
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
                    height: { xs: 200, sm: 200, md: 300 },
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
                  <Box marginY={0} >
                    <Typography variant={'subtitle2'} color="text.primary" sx={{ fontWeight: 500}} align={'center'}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                  
                  <Box display={'flex'} alignItems={'center'} marginTop={1}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.product2}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} marginTop={1}>
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
