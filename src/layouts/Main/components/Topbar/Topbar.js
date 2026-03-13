import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import { NavItem } from './components';
import smpllogo from '../../../../assets/logos/LogoH.png';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Top-Bar');
  const { mode } = theme.palette;
  const {
    products: productsPages,
    investors: investorsPages,
    careers: careersPages,
    more:morepage,
  } = pages;
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box marginLeft={4}>
          <Link
            href="/about"
            underline="none"
            onClick={() => gaEventTracker('About')}
          >
            <Typography variant='h6' color={linkColor} >
              About Us
            </Typography>
          </Link>
        </Box> */}
        <Box marginLeft={4} fontWeight="bold">
          <NavItem
            title={'Products'}
            id={'products-pages'}
            items={productsPages}
            colorInvert={colorInvert}
            // fontWeight="700"
            onClick={() => gaEventTracker('Nav-Bar')}
          />
        </Box>
        {/* <Box marginLeft={4}>
          <Link href="/technology" underline="none" onClick={()=>gaEventTracker('Technology')}>
            <Typography
              color={linkColor}
              fontWeight="bold"
            >
              What&apos;s Special
            </Typography>
          </Link>
        </Box> */}
        {/* <Box marginLeft={4}>
          <Link
            href="/careers"
            underline="none"
            onClick={() => gaEventTracker('Careers')}
          >
            <Typography color={linkColor} fontWeight="700">
              Careers
            </Typography>
          </Link>
        </Box> */}
        {/* <Box marginLeft={4} fontWeight="bold">
          <NavItem
            title={'Careers'}
            id={'careers-pages'}
            items={careersPages}
            colorInvert={colorInvert}
            // fontWeight="700"
            onClick={() => gaEventTracker('Nav-Bar')}
          />
        </Box> */}
         <Box marginLeft={4}>
          <Link
            href="/careers/why-us"
            underline="none"
            onClick={() => gaEventTracker('Careers')}
          >
            <Typography variant='h6' color={linkColor}>
              Careers
            </Typography>
          </Link>
        </Box>
        {/* <Box marginLeft={4}>
          <Link href="/investors" underline="none" onClick={()=>gaEventTracker('Investors')}>
            <Typography
              color={linkColor}
              fontWeight="700"
            >
             Investors
            </Typography>
          </Link>
        </Box> */}
        <Box marginLeft={4} fontWeight="bold">
          <NavItem
            title={'Investors'}
            id={'investors-page'}
            items={investorsPages}
            colorInvert={colorInvert}
            // fontWeight="700"
            onClick={() => gaEventTracker('Nav-Bar')}
          />
        </Box>
        
        {/* <Box marginLeft={4}>
          <Link
            href="/about"
            underline="none"
            onClick={() => gaEventTracker('About')}
          >
            <Typography color={linkColor} fontWeight="700">
              About Us
            </Typography>
          </Link>
        </Box> */}
        {/* <Box marginLeft={4}>
          <Link
            href="/blogs"
            underline="none"
            onClick={() => gaEventTracker('Blog')}
          >
            <Typography variant='h6' color={linkColor} >
              Blog
            </Typography>
          </Link>
        </Box> */}
        <Box marginLeft={4}>
          <Link
            href="/contact-page"
            underline="none"
            onClick={() => gaEventTracker('Contact')}
          >
            <Typography variant='h6' color={linkColor}>
              Contact
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={4} fontWeight="bold">
          <NavItem
            title={'More'}
            id={'more-pages'}
            items={morepage}
            colorInvert={colorInvert}
            // fontWeight="700"
            onClick={() => gaEventTracker('Nav-Bar')}
          />
        </Box>
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
            borderColor: '#ffd4b1',
            '&:hover': {
              borderColor: '#A03811', // hover border color
              backgroundColor: 'transparent', // keep transparent if you don’t want background
            },
          }}
        >
          <MenuIcon sx={{ color: '#ffd4b1',
            '&:hover': {
              color: '#A03811', // hover border color
              backgroundColor: 'transparent', // keep transparent if you don’t want background
            },
           }} />
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
