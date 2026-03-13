// import React, { useCallback, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import NoSsr from '@mui/material/NoSsr';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { Products } from './components';
// import mf1 from './../../assets/title/BGWhite.png';
// import ope from '../../assets/applications/OPENEW.png';
// import Welcome from 'common/Welcome';
// import { scrollToElement, styles } from 'common/styles';

// const Agency = () => {
//   const theme = useTheme();
//   const scrollTo = useCallback((id) => scrollToElement(id), []);
//   useEffect(() => {
//     const jarallaxInit = async () => {
//       const jarallaxElems = document.querySelectorAll('.jarallax');
//       if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
//         return;
//       }

//       const { jarallax } = await import('jarallax');
//       jarallax(jarallaxElems, { speed: 0.2 });
//     };

//     jarallaxInit();
//   }, []);

//   return (
//     <Main>
//       <Box
//         display={'flex'}
//         alignItems={'center'}
//         bgcolor={''}
//         mt={2}
//       >
//         <Container>
//           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
//             <Welcome
//               evapplication={ope}
//               typed="ope"
//               headerText1="Motor & Engine Controllers for"
//               headerText2="Outdoor Powered Equipment like "
//             />
//             <Box marginTop={15}>
//               <NoSsr>
//                 <Box
//                   component={'svg'}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   width={{ xs: 30, sm: 40 }}
//                   height={{ xs: 30, sm: 40 }}
//                   onClick={() => scrollTo('small-engine')}
//                   sx={{ cursor: 'pointer' }}
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </Box>
//               </NoSsr>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//       <Box
//         className={'jarallax'}
//         data-jarallax
//         data-speed="0.2"
//         position={'relative'}
//         // minHeight={'100vh'}
//         display={'flex'}
//         alignItems={'center'}
//         id="small-engine"
//       >
//         <Box className={'jarallax-img'} sx={styles(mf1, theme)} />
//         <Container marginTop={0} display={'flex'} flexDirection={'column'} alignItems={'center'}>
//           <Products />
//         </Container>
//       </Box>
//     </Main>
//   );
// };

// export default Agency;


import React, { useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Products } from './components';
import mf1 from './../../assets/title/BGWhite.png';
import ope from '../../assets/applications/OPENEW.png';
import Welcome from 'common/Welcome';
import { scrollToElement, styles } from 'common/styles';

const Agency = () => {
  const theme = useTheme();
  const scrollTo = useCallback((id) => scrollToElement(id), []);

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

      {/* ---------------------- HERO SECTION ---------------------- */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        mt={{ xs: 4, md: 2 }}
        // px={{ xs: 2, md: 0 }}
      >
        <Container
        //  sx={{ px: { xs: 2, md: 0 } }}
         >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="start"
            mt={-16}
          >
            <Welcome
              evapplication={ope}
              typed="ope"
              headerText1="Motor & Engine Controllers for"
              headerText2="Outdoor Powered Equipment like"
            />

            <Box mt={{ xs: 6, md: 10 }}>
              <NoSsr>
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 32, sm: 40 }}
                  height={{ xs: 32, sm: 40 }}
                  onClick={() => scrollTo('small-engine')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ---------------------- PARALLAX SECTION ---------------------- */}
      <Box
        id="small-engine"
        className="jarallax"
        data-jarallax
        data-speed="0.2"
        position="relative"
        minHeight="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={{ xs: 2, md: 0 }}
        py={{xs:8, md:0}}
      >
        <Box
          className="jarallax-img"
          sx={{
            ...styles(mf1, theme),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Container
          sx={{
            px: { xs: 2, md: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: { xs: 6, md: 5 },
          }}
        >
          <Products />
        </Container>
      </Box>

    </Main>
  );
};

export default Agency;
