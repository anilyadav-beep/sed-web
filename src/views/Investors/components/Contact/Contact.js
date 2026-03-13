import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const ContactUs = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Investors-Contact');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={2}
      >
        <Button
          component={'a'}
          variant="contained"
          color={'primary'}
          size="large"
          fullWidth={isMd ? false : true}
          href={'mailto:investors@sedemac.com'}
          onClick={()=>gaEventTracker('Investors-Contact')}
        >
          <text style={{color:"#ffffff"}}>Get in Touch</text>
        </Button>
      </Box>
      <Typography
        variant="subtitle1"
        color="text.primary"
        sx={{ fontWeight: 500 }}
        align={'center'}
        marginTop={2}
      >
        If you are interested in investing or seek to learn more through our <b>investor update calls</b>.
      </Typography>
    </Box>
  );
  
  return (
    <Box
      sx={{
        bgcolor: 'alternate.light',
        width: 1,
        height: 150,
        overflow: 'hidden',
      }}
    >
      <LeftSide />
    </Box>
  );
};

export default ContactUs;
