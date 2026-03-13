// import React, { useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
// import Welcome from 'common/Welcome';

// const Agency = () => {
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
//   },[]);
//   return (
//     <Main>
//       <Box
//         className='main-section'
//         display={'flex'}
//         alignItems={'center'}
//         bgcolor={''}
//         marginTop={-5}
//         paddingTop={5}
//       >
//         <Container>
//           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
//             <Welcome typed="Landing" />
//             <Box marginTop={4}>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//     </Main>
//   );
// };

// export default Agency;


import React, { useEffect } from 'react';
import Box from '@mui/material/Box'; 
import Main from 'layouts/Main';
import Container from 'components/Container'; 
import Welcome from 'common/Welcome';

const Agency = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  },[]);
  
  return (
//     <Main>
      <Welcome typed="Landing" />
//     </Main>
  );
};

export default Agency;
