import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {default as Chart2} from './Chart2';

const Slide4 = () => {
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
            <Chart2 />
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h4'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 600, 
                }}
              >
                Example #2 Genset Controllers
                
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                <li>First to integrate electronic governing. We enabled use of coarse actuators to make governing palatable on small gensets.</li>
                {/* <li><b>Three major Indian OEMs (Mahindra &amp; KOEL) &amp; One major US OEM (Briggs &amp; Stratton)</b> have <b>&quot;put it on all&quot;</b></li> */}
                <li><b>Three major Indian OEMs &amp; One major US OEM</b> have <b>&quot;put it on all&quot;</b></li>
                <li>&gt;70% market share in India in 6 years.</li>
                <li>#2/#3 by volume, globally, amongst independent genset controller makers.</li>
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide4;
