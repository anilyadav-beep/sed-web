import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import NavItem from './components/NavItem';
import smpllogo from './../../../../../../assets/logos/smpl-gray-no-bg.png';
import useAnalyticsEventTracker from '../../../../../../googleAnalytics/useAnalyticsEventTracker';

const SidebarNav = ({ pages, colorInvert = false }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Side-Bar');
  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  const { mode } = theme.palette;
  const {
    products: productsPages,
    investors: investorsPages,
    careers: careersPages,
    more: morePages,
  } = pages;

  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={1}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="SEDEMAC"
          // sx={{fontSize:24, fontWeight: 'bold', textDecoration: 'none'}}
          onClick={() => gaEventTracker('Home')}
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={mode === 'light' && !colorInvert ? smpllogo : smpllogo}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={4}>
        <Box
          paddingY={0}
          paddingX={2}
          sx={{
            borderRadius: 2,
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <NavItem
            title={'Products'}
            id={'products-pages'}
            items={productsPages}
          />
        </Box>
        {/* <Box
          paddingY={0}
          paddingX={2}
          sx={{
            borderRadius: 2,
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <NavItem
            title={'Careers'}
            id={'careers-pages'}
            items={careersPages}
          />
        </Box> */}
        <Box
          paddingY={2}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <Link
            href="/careers/why-us"
            underline="none"
            onClick={() => gaEventTracker('About')}
          >
            <Typography color={linkColor}>Careers</Typography>
          </Link>
        </Box>
        <Box
          paddingY={0}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1',
            },
          }}
        >
          <NavItem
            title={'Investors'}
            id={'investors-pages'}
            items={investorsPages}
          />
          {/* <Link
            href="/investors"
            underline="none"
            onClick={() => gaEventTracker('Investors')}
          >
            <Typography color={linkColor}>Investors</Typography>
          </Link> */}
        </Box>
        {/* <Box
          paddingY={2}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <Link
            href="/about"
            underline="none"
            onClick={() => gaEventTracker('About')}
          >
            <Typography color={linkColor}>About Us</Typography>
          </Link>
        </Box> */}
        <Box
          paddingY={2}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <Link
            href="/contact-page"
            underline="none"
            onClick={() => gaEventTracker('Contact')}
          >
            <Typography color={linkColor}>Contact</Typography>
          </Link>
        </Box>
        <Box
          paddingY={0}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1',
            },
          }}
        >
          <NavItem
            title={'More'}
            id={'more-pages'}
            items={morePages}
            colorInvert={colorInvert}
            // fontWeight="700"
            onClick={() => gaEventTracker('Nav-Bar')}
          />
        </Box>
        {/* <Box
          paddingY={2}
          paddingX={2}
          sx={{
            borderRadius: 2,
            backgroundColor: { linkColor }, // default background
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffd4b1', // or any custom color like '#f0f0f0'
            },
          }}
        >
          <Link
            href="/more/blogs"
            underline="none"
            onClick={() => gaEventTracker('Blog')}
          >
            <Typography color={linkColor}>Blog</Typography>
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
  colorInvert: PropTypes.bool,
};

export default SidebarNav;
