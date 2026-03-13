// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import gc1k from '../../../../assets/products/GC1k.jpg';
// import LSI from '../../../../assets/products/GENERAC_LSI.jpg';
// import batchg from '../../../../assets/products/BatChg.jpg';
// import ACM from '../../../../assets/applications/ACM.png';
// import GENERAC_LSI from '../../../../assets/products/GENERAC_LSI.png';
// import ProductCard from 'common/ProductCard';
// import { useTheme } from '@emotion/react';
// import { Card, CardContent, CardMedia, Chip } from '@mui/material';

// const mock2 = [
//   {
//     media: ACM,
//     title: 'Aftertreatment Control Modules',
//     product1: 'ICE Motorcycles, Scooters & OPE',
//     product2: 'Sensorless ISG, ECUs for Fuel Injection.',
//     link: '/gcu',
//     tag: 'Key Product',
//   },
//   {
//     media: GENERAC_LSI,
//     title: 'Fuel Injection ECUs',
//     product1: 'Electric Bikes & Scooters',
//     product2: 'Motor/Traction Controllers, Battery Management Systems.',
//     link: '/gas-genset-fuel-injection',
//     tag: 'Key Product',
//   },
//   // {
//   //   media: ACM,
//   //   title: 'Battery Chargers',
//   //   product1: 'Diesel / Gas Powered ',
//   //   product2:
//   //     'Generator Controllers, ECUs for Gaseous FI, Battery Chargers & e-Governors.',
//   //   link: '/battery-chargers',
//   // },
//   // {
//   //   media: ACM,
//   //   title: 'Engine Controllers & Governors',
//   //   product1: 'ICE Motorcycles, Scooters & OPE',
//   //   product2: 'Sensorless ISG, ECUs for Fuel Injection.',
//   //   link: '/e-gov',
//   // },
// ];

// const Products = () => {
//   const theme = useTheme();
//   return (
//     <Box>
//       <Box marginBottom={2}>
//         <Typography
//           color={'#A03811'}
//           variant="h4"
//           align={'center'}
//           data-aos={'fade-up'}
//           sx={{
//             fontWeight: 700,
//           }}
//         >
//           PRODUCTS
//         </Typography>
//       </Box>
//       <Grid
//         container
//         spacing={2}
//         display={'flex'}
//         flexDirection={'row'}
//         alignItems={'center'}
//         justifyContent={"center"}
//       >
//         {mock2.map((item, i) => (
//           <Grid
//             item
//             xs={12}
//             md={3}
//             // md={item?.fromEBikes === 'EBikes' || item?.fromEVS === 'EVS' ? 3 : 3}
//             key={i}
//             data-aos={'fade-up'}
//             data-aos-delay={item.i * 100}
//             data-aos-offset={100}
//             data-aos-duration={600}
//           >
//             <Box
//               display={'block'}
//               component={'a'}
//               href={item?.link}
//               onClick={() => gaEventTracker(item?.title)}
//               width={1}
//               height={1}
//               sx={{
//                 textDecoration: 'none',
//                 transition: 'all .2s ease-in-out',
//                 '&:hover': {
//                   transform: `translateY(-${theme.spacing(1 / 2)})`,
//                 },
//               }}
//             >
//               <Box
//                 component={Card}
//                 width={1}
//                 height={1}
//                 display={'flex'}
//                 flexDirection={'column'}
//               >
//                 <CardMedia
//                   // title={item?.title}
//                   image={item?.media}
//                   height={1}
//                   width={1}
//                   sx={{
//                     position: 'relative',
//                     height: { xs: 200, sm: 200, md: 300 },
//                     overflow: 'hidden',
//                   }}
//                 />
//                 <Chip
//                   label={item?.tag}
//                   sx={{
//                     position: 'absolute',
//                     top: 30,
//                     right: 20,
//                     bgcolor: 'background.paper',
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center', // centers horizontally
//                   }}
//                 >
//                   <Box textAlign="center">
//                     <Typography
//                       variant="h7"
//                       sx={{ fontWeight: 800, color: '#A03811' }}
//                     >
//                       {item?.title}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* <Grid
//         container
//         spacing={2}
//         justifyContent="center"
//         alignItems="stretch" // ⬅ ensures all grid items stretch equally
//       >
//         {mock2.map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i} display="flex">
//             <Box
//               component="a"
//               href={item.link}
//               sx={{
//                 textDecoration: 'none',
//                 display: 'flex',
//                 flexGrow: 1,
//               }}
//             >
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   flexGrow: 1,
//                   height: '100%',
//                   minHeight: 380, // ✅ uniform height
//                   boxShadow: 3,
//                   borderRadius: 3,
//                   transition: 'transform 0.2s ease-in-out',
//                   '&:hover': { transform: 'translateY(-4px)' },
//                 }}
//               >
//                 <Box sx={{ position: 'relative' }}>
//                   <CardMedia
//                     component="img"
//                     image={item.media}
//                     alt={item.title}
//                     sx={{
//                       height: 200,
//                       objectFit: 'contain', // ✅ consistent image display
//                       p: 2,
//                     }}
//                   />
//                   {item.tag && (
//                     <Chip
//                       label={item.tag}
//                       size="small"
//                       sx={{
//                         position: 'absolute',
//                         top: 12,
//                         right: 12,
//                         bgcolor: 'background.paper',
//                         fontWeight: 600,
//                       }}
//                     />
//                   )}
//                 </Box>

//                 <CardContent
//                   sx={{
//                     textAlign: 'center',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     flexGrow: 1,
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle1"
//                     sx={{ fontWeight: 700, color: '#A03811' }}
//                   >
//                     {item.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Grid>
//         ))}
//       </Grid> */}
//     </Box>
//   );
// };
// export default Products;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import { Card, CardContent, CardMedia, Chip } from '@mui/material';

import ACM from '../../../../assets/applications/ACM.png';
import GENERAC_LSI from '../../../../assets/products/GENERAC_LSI.png';
import ProductCard from 'common/ProductCard';

const mock2 = [
  {
    media: ACM,
    title: 'Aftertreatment Control Modules',
    link: '/acm',
    tag: 'Key Product',
  },
  {
    media: GENERAC_LSI,
    title: 'Fuel Injection ECUs',
    link: '/gas-genset-fuel-injection',
    tag: 'Key Product',
  },
];

const Products = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          color={'#A03811'}
          variant="h4"
          align="center"
          sx={{ fontWeight: 700 }}
        >
          PRODUCTS
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {mock2.map((item, i) => (
          // <Grid item xs={12} sm={6} md={3} key={i} display="flex">
          //   <Box
          //     component="a"
          //     href={item.link}
          //     sx={{
          //       textDecoration: 'none',
          //       display: 'flex',
          //       flexGrow: 1,
          //       transition: 'all .2s ease-in-out',
          //       '&:hover': { transform: `translateY(-${theme.spacing(0.5)})` },
          //     }}
          //   >
          //     <Card
          //       sx={{
          //         display: 'flex',
          //         flexDirection: 'column',
          //         justifyContent: 'space-between',
          //         flexGrow: 1,
          //         height: '100%',
          //         minHeight: 380, // ✅ uniform height for all cards
          //         borderRadius: 3,
          //         boxShadow: 3,
          //       }}
          //     >
          //       {/* --- Image Section --- */}
          //       <Box sx={{ position: 'relative' }}>
          //         <CardMedia
          //           component="img"
          //           image={item.media}
          //           alt={item.title}
          //           sx={{
          //             position: 'relative',
          //             height: { xs: 200, sm: 200, md: 300 },
          //             // objectFit: 'contain',
          //             overflow: 'hidden',
          //           }}
          //         />
          //         {item.tag && (
          //           <Chip
          //             label={item.tag}
          //             size="small"
          //             sx={{
          //               position: 'absolute',
          //               top: 12,
          //               right: 12,
          //               bgcolor: 'background.paper',
          //               fontWeight: 600,
          //             }}
          //           />
          //         )}
          //       </Box>

          //       {/* --- Title Section --- */}
          //       <CardContent
          //         sx={{
          //           textAlign: 'center',
          //           display: 'flex',
          //           flexDirection: 'column',
          //           justifyContent: 'center',
          //           flexGrow: 1,
          //           minHeight: 80, // ensures even content height
          //         }}
          //       >
          //         <Typography
          //           variant="h7" // use h6 instead of h7 (MUI has h1–h6 only)
          //           sx={{ fontWeight: 800, color: '#A03811' }}
          //         >
          //           {item.title}
          //         </Typography>
          //       </CardContent>
          //     </Card>
          //   </Box>
          // </Grid>
          <ProductCard item={item} i={i} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
