// import React, { useCallback } from 'react';
// import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import { Jobs, About } from './components';
// import { NoSsr } from '@mui/material';
// import { scrollToElement } from 'common/styles';

// const CareerListing = () => {
//   const theme = useTheme();

//   const scrollTo = useCallback((id) => scrollToElement(id), []);
//   return (
//     <Main>
//       <Box
//         minHeight={'100vh'}
//         display={'flex'}
//         alignItems={'center'}
//         bgcolor={''}
//         marginTop={-1.5}
//       >
//         <Container>
//           <Box>
//             <About />

//             <Box
//               mt={{ xs: 1, md: 10 }}
//               display={'flex'}
//               justifyContent={'center'}
//               alignItems={'center'}
//             >
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

//           <Box id="small-engine" marginTop={0}>
//             <Container maxWidth={1000} className="p-0">
//               <Jobs />
//             </Container>
//             <Box
//               component={'svg'}
//               preserveAspectRatio="none"
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               viewBox="0 0 1920 100.1"
//               sx={{
//                 marginBottom: -1,
//                 width: 1,
//               }}
//             >
//               <path
//                 fill={theme.palette.background.paper}
//                 d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
//               ></path>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </Main>
//   );
// };

// export default CareerListing;



import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Jobs, About } from './components';
import { NoSsr } from '@mui/material';
import { scrollToElement } from 'common/styles';

const CareerListing = () => {
  const theme = useTheme();
  const scrollTo = useCallback((id) => scrollToElement(id), []);

  return (
    <Main>

      {/* ================= FIRST SCREEN ================= */}
      <Box
        minHeight={{ xs: 'auto', md: '100vh' }}
        display="flex"
        alignItems={{ xs: 'flex-start', md: 'start' }}
        justifyContent="center"
        flexDirection="column"
        py={{ xs: 6, md: 0 }}
        marginTop={{ xs: 0, md: -1.5 }}
      >
        <Container>
          <About />

          {/* Down Arrow */}
          <Box
            mt={{ xs: 4, md: -7 }}
            display="flex"
            justifyContent="center"
          >
            <NoSsr>
              <Box
                component="svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 28, sm: 36, md: 40 }}
                height={{ xs: 28, sm: 36, md: 40 }}
                onClick={() => scrollTo('jobs-section')}
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

      {/* ================= SECOND SCREEN ================= */}
      <Box
        id="jobs-section"
        position="relative"
        // minHeight={{ xs: 'auto', md: '60vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ xs: 6, md: 0 }}
        bgcolor={theme.palette.background.paper}
      >
        <Container maxWidth={1000}>
          <Jobs />
        </Container>

        {/* Bottom wave svg */}
        <Box
          component="svg"
          preserveAspectRatio="none"
          viewBox="0 0 1920 100.1"
          sx={{
            display: { xs: 'none', md: 'block' }, // hide on mobile
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </Box>
      </Box>

    </Main>
  );
};

export default CareerListing;

