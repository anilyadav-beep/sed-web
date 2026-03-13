import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Slide5 = () => {
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
              justifyContent: 'normal',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h4'
                color="text.primary"
                gutterBottom
                align='center'
                sx={{
                  fontWeight: 600,
                }}
              >
              What do you think of EV Adoption in 2-Wheelers?
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide5;
