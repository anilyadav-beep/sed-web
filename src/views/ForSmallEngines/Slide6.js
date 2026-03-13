import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Integration from '../../assets/investors/IntegrationISGEFI.png';

const Slide6 = () => {
  const theme = useTheme();
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
              width: { xs: 1, md: '60%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          > 
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={Integration}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                maxHeight: 400,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '60%' },
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
              Integration of electronics of ISG and EFI saves OEMs costs. Is the future. 
                <br />
               
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                <li>Most ICE 2W will have ISG and with ISG &amp; EFI electronics integrated. <b>Starter motors will die</b>.</li>
                <li>We are the only company, globally, today that can offer integration of electronics of ISG &amp; EFI for all ICE 2Ws</li>
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide6;
