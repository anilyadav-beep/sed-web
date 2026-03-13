import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import smpllogo from '../../../../assets/logos/LogoH.png';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const [pagHigh, setPagHigh] = useState('');
 
  useEffect(() => {
    setPagHigh('');
  }, []);
  console.log(pagHigh, 'Ignore');

  const { mode } = theme.palette;
 
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="SEDEMAC"
        
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? smpllogo
              : smpllogo
          }
          height={1}
          width={1}
        />
      </Box>
     
      
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
