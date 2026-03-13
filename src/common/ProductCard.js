// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import { useTheme } from '@mui/material/styles';
// import Chip from '@mui/material/Chip';
// import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';

// const ProductCard = (item) => {
//   const theme = useTheme();
//   const gaEventTracker = useAnalyticsEventTracker('Click-EV-Products');
//   return (
//     <Grid
//       item
//       xs={12}
//       md={item?.fromEBikes === 'EBikes' || item?.fromEVS === 'EVS' ? 3 : 3}
//       key={item.i}
//       data-aos={'fade-up'}
//       data-aos-delay={item.i * 100}
//       data-aos-offset={100}
//       data-aos-duration={600}
//     >
//       <Box
//         display={'block'}
//         component={'a'}
//         href={item?.item?.link}
//         onClick={() => gaEventTracker(item?.item?.title)}
//         width={1}
//         height={1}
//         sx={{
//           textDecoration: 'none',
//           transition: 'all .2s ease-in-out',
//           '&:hover': {
//             transform: `translateY(-${theme.spacing(1 / 2)})`,
//           },
//         }}
//       >
//         <Box
//           component={Card}
//           width={1}
//           height={1}
//           display={'flex'}
//           flexDirection={'column'}

//         >
//           <CardMedia
//             title={item?.item?.title}
//             image={item?.item?.media}
//             sx={{
//               position: 'relative',
//               height: { xs: 200, sm: 200, md: 300 },
//               overflow: 'hidden',
//             }}
//           />
//           <Chip
//             label={item?.item?.tag}
//             sx={{
//               position: 'absolute',
//               top: 30,
//               right: 20,
//               bgcolor: 'background.paper',
//             }}
//           />
//           {/* <CardContent>
//             <Box>
//             <Typography
//               variant={'h7'}
//               align={'center'}
//               sx={{ fontWeight: 800, color: "#A03811" }}
//             >
//               {item?.item?.title}
//             </Typography>
//             </Box>
//           </CardContent> */}
//           <CardContent
//             sx={{
//               display: 'flex',
//               justifyContent: 'center', // centers horizontally
//               // alignItems: 'center', // centers vertically
//               // height: '100%', // makes it take full card height
//             }}
//           >
//             <Box textAlign="center">
//               <Typography
//                 variant="h7" // use h6 instead of h7 (MUI has h1–h6 only)
//                 sx={{ fontWeight: 800, color: '#A03811' }}
//               >
//                 {item?.item?.title}
//               </Typography>
//             </Box>
//           </CardContent>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default ProductCard;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';

const ProductCard = (item) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-EV-Products');

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={item.i}
      data-aos={'fade-up'}
      data-aos-delay={item.i * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Box
        display={'block'}
        component={'a'}
        href={item?.item?.link}
        onClick={() => gaEventTracker(item?.item?.title)}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: `translateY(-${theme.spacing(0.5)})`,
          },
        }}
      >
        <Card
          sx={{
            width: 1,
            height: 1,
            boxShadow:1,
            // boxShadow: '2px 1px 3px rgba(0.2, 0.2, 0.2, 0.2)',
            // transition:
            //   'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
            // '&:hover': {
            //   transform: 'translateY(-1px)',
            //   boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)',
            // },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="img"
            title={item?.item?.title}
            image={item?.item?.media}
            sx={{
              objectFit: { xs: 'contain', md: 'cover' }, // full image on mobile, cropped on desktop
              width: '100%',
              height: { xs: 180, sm: 200, md: 300 },
              bgcolor: '#ffffff', // background for transparency
              // borderBottom: '1px solid #eee',
            }}
          />
          <Chip
            label={item?.item?.tag}
            sx={{
              position: 'absolute',
              top: 30,
              right: 20,
              bgcolor: 'background.paper',
            }}
          />
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box textAlign="center">
              <Typography
                variant="h7"
                sx={{ fontWeight: 800, color: '#A03811' }}
              >
                {item?.item?.title}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ProductCard;
