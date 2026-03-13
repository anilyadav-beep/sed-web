import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import batchg from '../../../../assets/products/BatChg.jpg';
import Link from '@mui/material/Link';
import batteryChargeBrochure from '../../../../assets/brochures/SEDEMAC_Battery_Charger_2019.pdf';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

const mock = {
  image: batchg,
  description:
    'Smart, automatic, multistage battery chargers designed for 12V lead acid storage battery. The chargers comprise of high grade electronic components to ensure reliable and efficient performance.',
  feature1: 'Advanced switched mode supply design for high efficiency',
  feature2: 'Battery Care ideology in-built for long battery life',
  feature3: 'Robust mechanical design for all condition operation',
  title: 'Battery Chargers',
  date: 'In Production Since 2017',
};

const ProductLine2 = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Battery-Charger');
  return (
    // <Box>
    //   <Box
    //     component={'a'}
    //     display={'block'}
    //     width={1}
    //     height={1}
    //     sx={{
    //       textDecoration: 'none',
    //       transition: 'all .2s ease-in-out',
    //     }}
    //   >
    //     <Box
    //       component={Card}
    //       width={1}
    //       height={1}
    //       boxShadow={0}
    //       display={'flex'}
    //       flexDirection={{ xs: 'column', md: 'row-reverse' }}
    //       sx={{ backgroundImage: 'none' }}
    //     >
    //       <Box
    //         sx={{
    //           width: { xs: 1, md: '50%' },
    //           position: 'relative',
    //           '& .lazy-load-image-loaded': {
    //             height: 1,
    //             display: 'flex !important',
    //           },
    //         }}
    //       >
    //         <Box
    //           component={LazyLoadImage}
    //           height={1}
    //           width={1}
    //           src={mock.image}
    //           alt="..."
    //           effect="blur"
    //           sx={{
    //             objectFit: 'cover',
    //             maxHeight: 360,
    //             filter:
    //               theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
    //           }}
    //         />
    //         <Chip
    //           label="CE / UL Certified"
    //           sx={{
    //             position: 'absolute',
    //             top: 20,
    //             right: 20,
    //             bgcolor: 'background.paper',
    //           }}
    //         />
    //         <Box
    //           component={'svg'}
    //           viewBox="0 0 112 690"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           sx={{
    //             position: 'absolute',
    //             bottom: 0,
    //             top: '-50%',
    //             left: 0,
    //             right: 0,
    //             color: theme.palette.background.paper,
    //             transform: 'scale(2)',
    //             height: 1,
    //             width: 'auto',
    //             transformOrigin: 'top center',
    //             display: { xs: 'none', md: 'block' },
    //           }}
    //         >
    //           <path
    //             d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
    //             fill="currentColor"
    //           />
    //         </Box>
    //       </Box>
    //       <CardContent
    //         sx={{
    //           position: 'relative',
    //           width: { xs: 1, md: '50%' },
    //           padding: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           justifyContent: 'space-between',
    //         }}
    //       >
    //         <Box>
    //           <Typography variant={'h5'} gutterBottom>
    //             {mock.title}
    //           </Typography>
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          mt: { xs: 0, md: -8 },
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={0}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50%' },
              position: 'relative',
              '& .lazy-load-image-loaded': {
                height: 1,
                display: 'flex !important',
              },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={mock?.image}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                maxHeight: 400,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Chip
              label="CE / UL Certified"
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'background.paper',
              }}
            />
            <Box
              component={'svg'}
              viewBox="0 0 112 690"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                position: 'absolute',
                bottom: 0,
                top: '-50%',
                left: 0,
                right: 0,
                color: theme.palette.background.paper,
                transform: 'scale(2)',
                height: 1,
                width: 'auto',
                transformOrigin: 'top center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <path
                d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                fill="currentColor"
              />
            </Box>
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant={'h5'} gutterBottom>
                {mock.title}
              </Typography>
              <Typography
                variant={'subtitle1'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                for{' '}
                <Link href="/products/generators" color="primary">
                  Generators
                </Link>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature1}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature2}</li>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                <li>{mock.feature3}</li>
              </Typography>
            </Box>
            {/* <Box>
              <Divider sx={{ marginY: 1 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  <Button
                    variant="contained"
                    text-color="inherit"
                    color="primary"
                    size="small"
                    href={batteryChargeBrochure}
                    target="_blank"
                    sx={{ display: 'flex' }}
                    onClick={() =>
                      gaEventTracker('Battery-Charger-Download-Brochure')
                    }
                  >
                    <text style={{ color: '#ffffff', textAlign: 'center' }}>
                      Download Brochure
                    </text>
                  </Button>
                </Box>
                <Typography
                 sx={{ display: 'flex', textAlign:"center", ml:{xs:5, md:0}  }}
                  color={'text.secondary'}
                > */}

                <Box>
              <Divider sx={{ my: 1 }} />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'row', sm: 'row' }} // responsive layout
                gap={{ xs: 1, sm: 0 }}
              >
                {/* Left Side */}
                <Box display="flex" alignItems="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    href={batteryChargeBrochure}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('Battery-Charger-Download-Brochure')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                      Download Brochure
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: 'flex', ml: { xs: 3, md: 0 } }}
                  color={'text.secondary'}
                  fontSize={15}
                >
                  {mock.date}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLine2;
