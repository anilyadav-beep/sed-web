import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker('Click-Footer');

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box marginTop={0} marginRight={0}>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={0}>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
        >
          &copy; <Link  href="/" color={'inherit'} underline="none" onClick={()=>gaEventTracker('Home')}>SEDEMAC</Link> (2007-2025) | All Rights Reserved | U29253PN2007PLC246956 | <Link href="/investors/corporate-governance/codes-and-policies" color={'inherit'} onClick={()=>gaEventTracker('Terms')}>Policies</Link>
           {/* | <Link href="/cookies" color={'inherit'} onClick={()=>gaEventTracker('Cookie')}>Cookie Policy</Link> | <Link href="/mobile-app-policy" color={'inherit'} onClick={()=>gaEventTracker('Mobile App Policy')}>Mobile Application Privacy Policy</Link> */}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
