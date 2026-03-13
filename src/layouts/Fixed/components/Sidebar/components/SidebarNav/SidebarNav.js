import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import smpllogo from './../../../../../../assets/logos/smpl-gray-no-bg.png';
import useAnalyticsEventTracker from '../../../../../../googleAnalytics/useAnalyticsEventTracker';

const SidebarNav = ({ colorInvert = false }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Side-Bar');
  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  const { mode } = theme.palette;
 

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/coverpage"
          onClick={()=>gaEventTracker('Home')}
          title="SEDEMAC"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? smpllogo
                : ''
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={3} paddingY={4}>
        
        <Box paddingY={2}>
          <Link href="/" underline="none" onClick={()=>gaEventTracker('Technology')}>
            <Typography color={linkColor}>
             Mobile Navigation Not Supported
            </Typography>
          </Link>
        </Box>
        
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
  colorInvert: PropTypes.bool,
};

export default SidebarNav;
