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
import ISAACBrochure from '../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import gcuBrochure from '../assets/brochures/SEDEMAC_GCU_2019.pdf';
import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';
import Link from '@mui/material/Link';

const ProductDetails = ({ mock, type }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-GCU');
  return type === 'GCU' ? (
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
                  Diesel / Gas Powered Generators
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
                    target="_blank"
                    href={gcuBrochure}
                    sx={{ display:'flex' }}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
                  >
                    <text style={{ color: '#ffffff', textAlign:"center" }}>Download Brochure</text>
                  </Button>
                </Box> */}

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
                    href={gcuBrochure}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
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
                  In Production Since 2014
                  <br />
                  On over 800,000 Generators
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  ) : type === 'ACM' ? (
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
            {/* <Chip
              label="Built with SLC"
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'background.paper',
              }}
            /> */}
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
                <span>
                  <Link href="/products/generators" color="primary">
                    {' '}
                    Diesel Powered
                  </Link>{' '}
                  LCVs / MHCVs
                </span>
              </Typography>
              <Typography color="text.secondary" fontSize={15}>
                {mock.description}
              </Typography>
              {/* <br /> */}
              <div style={{ marginLeft: '20px' }}>
                <Typography color="text.secondary" fontSize={15}>
                  <li>{mock.feature1}</li>
                </Typography>
                <Typography color="text.secondary" fontSize={15}>
                  <li>{mock.feature2}</li>
                </Typography>
                <Typography color="text.secondary" fontSize={15}>
                  <li>{mock.feature3}</li>
                </Typography>
                <Typography color="text.secondary" fontSize={15}>
                  <li>{mock.feature4}</li>
                </Typography>
                <Typography color="text.secondary" fontSize={15}>
                  <li>{mock.feature5}</li>
                </Typography>
              </div>
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
                    target="_blank"
                    href={gcuBrochure}
                    sx={{ display:'flex'}}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
                  >
                     <text style={{ color: '#ffffff', textAlign:"center" }}>Download Brochure</text>
                  </Button>
                </Box> */}
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
                    href="mailto:sales@sedemac.com"
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
                  >
                    <Typography color="#ffffff" fontSize={12} padding={1}>
                       Get in Touch
                    </Typography>
                  </Button>
                </Box>
                <Typography
                  sx={{ display: 'flex', ml: { xs: 3, md: 0 } }}
                  color={'text.secondary'}
                  fontSize={15}
                >
                  Getting ready for Production
                  {/* <br />
                  On over 800,000 Generators */}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        sx={{
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
              src={mock.image}
              alt="..."
              effect="blur"
              sx={{
                objectFit: 'cover',
                maxHeight: 360,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Chip
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
              <Typography color="text.secondary">{mock.description}</Typography>
            </Box>
            {/* <Box>
              <Divider sx={{ marginY: 2 }} />
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
                    target="_blank"
                    href={ISAACBrochure}
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
                  >
                   <text style={{ color: '#ffffff', textAlign:"center" }}>Download Brochure</text>
                  </Button>
                </Box> */}

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
                    href={ISAACBrochure}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      whiteSpace: 'nowrap', // 🚀 prevents text break
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 0.7, sm: 0.9 },
                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                    onClick={() => gaEventTracker('GCU-Brochure-Download')}
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
                  In Series Production since 2023
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
