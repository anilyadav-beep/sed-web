// import React, { useEffect, useState, useCallback } from 'react';
// import Box from '@mui/material/Box';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { Headline, Welcome } from './components';
// import { scrollToElement } from 'common/styles';
// import { NoSsr } from '@mui/material';
// import SvgIcon from '@mui/material/SvgIcon';
// import innovativeControlBrochure from '../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
// import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';

// const Agency = () => {
//   useEffect(() => {
//     const jarallaxInit = async () => {
//       const jarallaxElems = document.querySelectorAll('.jarallax');
//       if (!jarallaxElems || jarallaxElems.length === 0) return;
//       const { jarallax } = await import('jarallax');
//       jarallax(jarallaxElems, { speed: 0.2 });
//     };
//     jarallaxInit();
//   }, []);

//   return (
//     <Main>
//       <Container>
//         <Box
//           minHeight="100vh"
//           display={'flex'}
//           flexDirection={"column"}
//           alignItems={'center'}
//           bgcolor={''}
//         >
//           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
//             <Welcome />
//           </Box>
//         </Box>
//       </Container>
//     </Main>
//   );
// };

// export default Agency;

// function CustomMailDownloadIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       {/* Replace this path data with the actual SVG path for your icon */}
//       {/* This is a placeholder example path for a simple mail and arrow */}
//       <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2zM12 16l-3-3h6l-3 3z" />{' '}
//       {/* This is a very rough example path */}
//       {/* For an envelope with a download arrow *on* it, the path will be more complex */}
//       {/* Example from Font Awesome's envelope-open-text (but you need the download part) */}
//       {/* <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2zM12 16l-3-3h6l-3 3z M15 15L12 18L9 15L10 14L12 16L14 14L15 15Z"/> */}
//     </SvgIcon>
//   );
// }


// import React, { useEffect, useState, useCallback } from 'react';
// import Box from '@mui/material/Box';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { Headline, Welcome } from './components';
// import { scrollToElement } from 'common/styles';
// import { NoSsr } from '@mui/material';
// import SvgIcon from '@mui/material/SvgIcon';
// import innovativeControlBrochure from '../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
// import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';

// const Agency = () => {
//   useEffect(() => {
//     const jarallaxInit = async () => {
//       const jarallaxElems = document.querySelectorAll('.jarallax');
//       if (!jarallaxElems || jarallaxElems.length === 0) return;
//       const { jarallax } = await import('jarallax');
//       jarallax(jarallaxElems, { speed: 0.2 });
//     };
//     jarallaxInit();
//   }, []);

//   return (
//     <Main>
//       <Container>
//         <Box
//           minHeight="100vh"
//           display={'flex'}
//           flexDirection={"column"}
//           alignItems={'center'}
//           bgcolor={''}
//         >
//           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
//             <Welcome />
//           </Box>
//         </Box>
//       </Container>
//     </Main>
//   );
// };

// export default Agency;

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline, Welcome } from './components';
import { scrollToElement } from 'common/styles';
import { NoSsr, Typography, Card, Link } from '@mui/material';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
import { useNavigate } from 'react-router-dom';

const Agency = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || jarallaxElems.length === 0) return;
      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };
    jarallaxInit();
  }, []);

  return (
    <Main>
      {/* FULL WIDTH SECTION */}
      {/* <Container> */}
      <Box width="100%" sx={{ bgcolor: 'alternate.light' }} paddingX={{XS:0, md:5}}>
        
        {/* HERO SECTION */}
        <Box
          id="1st-part"
          sx={{
            width: '100%',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            pb: { xs: 2, md: 0 },
          }}
        >

          {/* Centered inner content (maxWidth controlled) */}
          <Box
            sx={{
              width: '100%',
              maxWidth: 1400,
              mx: 'auto',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: 8, md: 8 },
              px: { xs: 3, md: 6 },
            }}
          >
            {/* Left text */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'start' },
                px: { xs: 3, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ maxWidth: 500, fontWeight: 700}}
              >
                We are a mid-sized, growing, profitable & capital-efficient
                <br />
                company from India
              </Typography>
            </Box>

            {/* Card on Right */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                width: '100%',
                maxWidth: 400,
                alignItems: 'center',
              }}
            >
              <Card
                sx={{
                  bgcolor: '#ffe3ccff',
                  width: '100%',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 1,
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/investors/financial-information')}
              >
                <Typography variant="body1" textAlign="center">
                  Financial Performance & <br /> Investor Presentations
                </Typography>
              </Card>
            </Box>
          </Box>

          {/* DRHP Link */}
          <Link
            href="/investors/other-information/ipo-offer-documents/drhp"
            underline="hover"
            sx={{
              paddingTop: { xs: 12, md: 10 },
              fontSize: 18,
              fontWeight: 500,
              color: '#A03811',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            <Typography
              sx={{
                mt: { xs: 3, md: 0 },
                fontSize: 18,
                fontWeight: 500,
                color: '#A03811',
                cursor: 'pointer',
                textDecoration: 'underline',
                textAlign:"center",
                paddingX:3
              }}
            >
              Red Herring Prospectus and Audio-Visual
            </Typography>
          </Link>

          {/* Scroll Down Icon */}
          {/* <Box mt={{ xs: 5, md: 0 }}>
            <NoSsr>
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() =>
                  document
                    .getElementById('2nd-part')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box> */}

        </Box>
      </Box>
      {/* </Container> */}
    </Main>
  );
};

export default Agency;


function CustomMailDownloadIcon(props) {
  return (
    <SvgIcon {...props}>
      {/* Replace this path data with the actual SVG path for your icon */}
      {/* This is a placeholder example path for a simple mail and arrow */}
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2zM12 16l-3-3h6l-3 3z" />{' '}
      {/* This is a very rough example path */}
      {/* For an envelope with a download arrow *on* it, the path will be more complex */}
      {/* Example from Font Awesome's envelope-open-text (but you need the download part) */}
      {/* <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2zM12 16l-3-3h6l-3 3z M15 15L12 18L9 15L10 14L12 16L14 14L15 15Z"/> */}
    </SvgIcon>
  );
}


