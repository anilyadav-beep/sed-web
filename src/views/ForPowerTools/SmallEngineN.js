// import React, { useCallback, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import NoSsr from '@mui/material/NoSsr';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { Products } from './components';
// import mf1 from './../../assets/title/BGWhite.png';
// import powertools from '../../assets/applications/PTNEW.png';
// import MJOLNIR from '../../assets/applications/MJOLNIR.png';
// import Welcome from 'common/Welcome';
// import { scrollToElement, styles } from 'common/styles';
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   Grid,
//   Typography,
// } from '@mui/material';

// const mock2 = [
//   {
//     media: MJOLNIR,
//     title: 'Compact Motor Control Units (MCUs)',
//     product1: 'ICE Motorcycles, Scooters & OPE',
//     product2: 'Sensorless ISG, ECUs for Fuel Injection.',
//     link: '/traction-controllers',
//     tag: 'Key Product',
//   },
// ];

// const Agency = () => {
//   const theme = useTheme();
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
//   const scrollTo = useCallback((id) => scrollToElement(id), []);

//   return (
//     <Main>
//       <Box
//         // minHeight={'100vh'}
//         display={'flex'}
//         alignItems={'center'}
//         bgcolor={''}
//         marginTop={2}
//         // paddingTop={5}
//       >
//         <Container>
//           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
//             <Welcome
//               typed="power-tool"
//               evapplication={powertools}
//               headerText1="Motor Controllers with Sensorless Commutation"
//               headerText2="for Battery-Powered tools like"
//             />
//             <Box marginTop={{ xs: 10, md: 15 }}>
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
//         <Container marginTop={0} paddingY={12}>
//           <Products />
//           <Box
//             marginTop={{ xs: 0, md: 8 }}
//             display={'flex'}
//             justifyContent={'center'}
//             alignItems={'center'}
//           >
//             <NoSsr>
//               <Box
//                 component={'svg'}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 width={{ xs: 30, sm: 40 }}
//                 height={{ xs: 30, sm: 40 }}
//                 onClick={() => scrollTo('product')}
//                 sx={{ cursor: 'pointer' }}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </Box>
//             </NoSsr>
//           </Box>
//         </Container>
//       </Box>
//       <Container>
//         <Box
//           marginBottom={2}
//           paddingTop={{ xs: 12, md: 3 }}
//           data-speed="0.2"
//           id="product"
//         >
//           <Typography
//             color={'#A03811'}
//             variant="h4"
//             align="center"
//             data-aos="fade-up"
//             sx={{ fontWeight: 700 }}
//           >
//             PRODUCTS
//           </Typography>
//         </Box>

//         <Grid container spacing={2} justifyContent="center" alignItems="center">
//           {mock2.map((item, i) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={3}
//               key={i}
//               data-aos={'fade-up'}
//               data-aos-delay={i * 100}
//               data-aos-offset={100}
//               data-aos-duration={600}
//             >
//               <Box
//                 display={'block'}
//                 component={'a'}
//                 href={item?.link}
//                 onClick={() => gaEventTracker(item?.title)}
//                 width={1}
//                 height={1}
//                 sx={{
//                   textDecoration: 'none',
//                   transition: 'all .2s ease-in-out',
//                   '&:hover': {
//                     transform: `translateY(-4px)`,
//                   },
//                 }}
//               >
//                 <Card sx={{ height: '100%' }}>
//                   <CardMedia
//                     title={item?.title}
//                     image={item?.media}
//                     sx={{
//                       position: 'relative',
//                       height: { xs: 200, sm: 200, md: 300 },
//                       overflow: 'hidden',
//                     }}
//                   />

//                   <Chip
//                     label={item?.tag}
//                     sx={{
//                       position: 'absolute',
//                       top: 30,
//                       right: 20,
//                       bgcolor: 'background.paper',
//                     }}
//                   />

//                   <CardContent sx={{ textAlign: 'center' }}>
//                     <Typography
//                       variant="h6"
//                       sx={{ fontWeight: 800, color: '#A03811' }}
//                     >
//                       {item?.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
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
import powertools from '../../assets/applications/PTNEW.png';
import MJOLNIR from '../../assets/applications/MJOLNIR.png';
import Welcome from 'common/Welcome';
import { scrollToElement, styles } from 'common/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

const mock2 = [
  {
    media: MJOLNIR,
    title: 'Compact Motor Control Units (MCUs)',
    product1: 'ICE Motorcycles, Scooters & OPE',
    product2: 'Sensorless ISG, ECUs for Fuel Injection.',
    link: '/traction-controllers',
    tag: 'Key Product',
  },
];

const Agency = () => {
  const theme = useTheme();

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || jarallaxElems.length === 0) return;

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  }, []);

  const scrollTo = useCallback((id) => scrollToElement(id), []);

  return (
    <Main>
      {/* ------------------------ SECTION 1 : HERO ------------------------ */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt:-0.2
          // px: { xs: 2, md: 0 },
        }}
      >
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center" mt={-7}>
            <Welcome
              typed="power-tool"
              evapplication={powertools}
              headerText1="Motor Controllers with Sensorless Commutation"
              headerText2="for Battery-Powered tools like"
            />

            <Box mt={{ xs: 10, md: 15 }}>
              <NoSsr>
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('section2')}
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

      {/* ------------------------ SECTION 2 : PARALLAX ------------------------ */}
      <Box
        id="section2"
        className="jarallax"
        data-jarallax
        data-speed="0.2"
        sx={{
          paddingTop:{xs:12, md:0},
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box className="jarallax-img" sx={styles(mf1, theme)} />

        <Container sx={{ px: { xs: 2, md: 0 } }}>
          <Products />

          <Box mt={{xs:2, md:8}} display="flex" justifyContent="center">
            <NoSsr>
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => scrollTo('section3')}
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
        </Container>
      </Box>

      {/* ------------------------ SECTION 3 : PRODUCTS LIST ------------------------ */}
      <Box
        id="section3"
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // pt: 4,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          color="#A03811"
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, mb: 2}}
        >
          PRODUCTS
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {mock2.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={i}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'block'}
                component={'a'}
                href={item?.link}
                onClick={() => gaEventTracker(item?.title)}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-4px)`,
                  },
                }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    title={item?.title}
                    image={item?.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 200, sm: 200, md: 300 },
                      overflow: 'hidden',
                    }}
                  />

                  <Chip
                    label={item?.tag}
                    sx={{
                      position: 'absolute',
                      top: 30,
                      right: 20,
                      bgcolor: 'background.paper',
                    }}
                  />

                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 800, color: '#A03811' }}
                    >
                      {item?.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Main>
  );
};

export default Agency;
