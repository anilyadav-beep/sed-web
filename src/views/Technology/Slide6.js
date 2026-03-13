/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import slc from '../../assets/investors/BLDC-Motor.gif';

const Slide6 = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={8} order={{ xs: 2, md: 1 }}>
        <Box>
          <Box marginBottom={2} >
            <Typography
              variant="h3"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              What is Commutation? <br />
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary.dark'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.0,
                  )} 0%)`,
                }}
              >
             
              </Typography>
            </Typography>
          </Box>         
        </Box>
      </Grid>
      <Grid item xs={12} md={4} order={{ xs: 1, md: 1 }}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={slc}
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Slide6;
