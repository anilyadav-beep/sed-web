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
          <Box
            sx={{
              width: { xs: 1, md: '50%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          > 
            
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              maxHeight={300}
              src="https://youtube.com/embed/UtBYjU4ndW8?rel=0"
              frameBorder="1"
              allow="accelerometer; encrypted-media; gyroscope"
              borderRadius={2}
            />
            
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '80%' },
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
                <Typography variant='h4' sx={{ fontWeight: 700}}>ISG gives users an effortless start feel</Typography>
                <br />
                <br />
                <li>The entire starter motor system is eliminated.</li>
                <li>No starter-motor ideal for large number of start-stops.</li>                
              </Typography>
              
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide3;
