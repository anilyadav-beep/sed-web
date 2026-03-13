import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from 'components/Container';
import { Topbar, Sidebar, Footer } from './components';
import pages from '../navigation';
import BreadcrumbsNav from 'common/BreadcrumbsNav';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      // FIX 1: Use minHeight to allow scrolling on small screens/tall content
      minHeight="100vh"
    >
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
          boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.1)',
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      {/* <main> takes up all available vertical space */}
      <main style={{ flexGrow: 1 }}>
        {/* <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingY={2}
          paddingX={10}
        >
          <Box />
          <BreadcrumbsNav />
        </Box> */}
        <Box
          // FIX 2: Use responsive marginBottom to separate content from the footer
          // sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
        >
          {children}
        </Box>
      </main>

      {/* Divider is placed between main content and footer container */}
      <Divider />

      <Container
        // FIX 3: Use responsive paddingY for the footer container itself
        sx={{ paddingY: { xs: 1, md: 1 } }}
      >
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
