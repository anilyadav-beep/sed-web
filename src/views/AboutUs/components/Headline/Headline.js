import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // minHeight:"40vh",
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          marginBotton={5}
          color='#A03811'
        >
          About Us
        </Typography>
        <Typography variant={'h6'} color={'text.primary'}  align={'center'} marginTop={10}>
            Our vision is to be a <b style={{color:'#A03811'}}>globally respected controls company</b> developing  <br />
          <b style={{color:'#A03811'}}>innovative technologies and products</b> that see <b style={{color:'#A03811'}}>widespread use</b>.
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
