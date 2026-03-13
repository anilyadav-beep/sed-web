import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Slide3 = () => {
  return (
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={0}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '100%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h6'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 500, 
                }}
              >
                Developed first sensorless commutation technology for battery powered tools requiring high-torque at low speeds.
              </Typography>
              <Typography
                variant="h4"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 600 }}
              >
                We believe all motors in battery-powered tools will go sensorless over this decade.
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide3;
