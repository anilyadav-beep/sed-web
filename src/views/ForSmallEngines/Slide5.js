import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EFIExplainer from '../../assets/investors/EFIExplainer.png';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';

const Slide5 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Landing');
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
            <Link href='/traction-controllers' onClick={()=>gaEventTracker('Featured-Image')}>
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={EFIExplainer}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  maxHeight: 700,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Link>
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
               We have started high-volume supply of EFI ECU 
                <br />
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                <li>First Indian company with EFI in Indian 2W market.</li> 
                <li>No major technology advantage vis-a-vis majors.</li>
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide5;
