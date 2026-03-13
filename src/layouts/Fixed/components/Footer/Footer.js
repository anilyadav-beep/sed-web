import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker('Click-Footer');

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          //gutterBottom
        >
          &copy; <Link  href="/" color={'inherit'} underline="none" onClick={()=>gaEventTracker('Home')}>SEDEMAC</Link> (2007-2025) | All Rights Reserved 
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
