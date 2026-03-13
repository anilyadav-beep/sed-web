import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          variant={'h4'}
          color={'text.primary'}
          align={'center'}
        >
          Continual ability to build <span style={{ textDecoration: 'none', color: '#A03811' }}>fresh, difficult-to-replicate control
          technologies</span>, products and scale to <span style={{ textDecoration: 'none', color: '#A03811' }}>large supplies across multiple,
          large, global markets</span> serve as our long-term moats.
        </Typography>
        <br />
      </Box>
    </Box>
  );
};

export default Headline;
