/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Container from 'components/Container';

const mock = [
  {
    title: 'Robust, Profitable Growth in Large Markets',
    subtitle:
      'We sell innovative and critical-to-the-application control products to leaders of large markets; leading to highly-sticky, profitable customer relationships.',
    icon: (
      <img src="https://img.icons8.com/dotty/50/000000/rebalance-portfolio.png" />
    ),
  },
  {
    title: ' Difficult-to-Replicate Technologies as Moat',
    subtitle:
      'We have a history of creating defensible long-term competitive advantage positions around fresh, complex technologies built in-house.',
    icon: (
      <img src="https://img.icons8.com/ios/50/000000/sine--v1.png" />
    ),
  },
  {
    title: 'High Volume Manufacturing Done In-House',
    subtitle:
      'We produce millions of controllers each year in our world-class facilities. These products meet best-in-class quality standards for the industries they serve.',
    icon: (
      <img src="https://img.icons8.com/dotty/50/000000/rev-robotics-expansion-hub.png" />
    ),
  },
];

const below = [
  {
    title: 'Widely Applicable Technology as Growth Driver',
    subtitle:
      'Our current big bet is sensorless commutation - a motor control technology relevant to ~0.5-billion motors/year across multiple markets. The technology is particularly relevant to markets seeing electrification.',
    icon: (
      <img src="https://img.icons8.com/ios/50/000000/wheel.png" />
    ),
  },

  {
    title: 'World-class Engineers and Innovation Culture',
    subtitle:
      'Central to our success is a robust, growing nucleus of highly talented engineers and a culture where such engineers are constantly looking at inventing new technologies to move industry forward.',
    icon: (
      <img src="https://img.icons8.com/dotty/50/000000/user-group-man-woman.png" />
    ),
  },
];

const RevenueGrowth = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <Box
    >
      <Box marginBottom={1}>
        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& img': {
              objectFit: 'cover',
            },
            '& .lazy-load-image-loaded': {
              height: 1,
              width: 1,
            },
          }}
        >
          <Grid container spacing={4}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <ListItem
                  component="div"
                  disableGutters
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 0,
                  }}
                >
                  <Box
                    component={ListItemAvatar}
                    marginBottom={1}
                    minWidth={'auto !important'}
                  >
                    <Box color={theme.palette.primary.main}>{item.icon}</Box>
                  </Box>
                  <ListItemText
                    primary={item.title}
                    secondary={item.subtitle}
                    primaryTypographyProps={{
                      variant: 'h7',
                      gutterBottom: true,
                      align: 'left',
                    }}
                    secondaryTypographyProps={{ align: 'left', variant: 'subtitle2' }}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 700,
                      },
                      margin: 0,
                    }}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
          <Box marginTop={2}>
            <Grid container spacing={4}>
              {below.map((item, i) => (
                <Grid key={i} item xs={12} md={6}>
                  <ListItem
                    component="div"
                    disableGutters
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                    }}
                  >
                    <Box
                      component={ListItemAvatar}
                      marginBottom={1}
                      minWidth={'auto !important'}
                    >
                      <Box color={theme.palette.primary.main}>{item.icon}</Box>
                    </Box>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                      primaryTypographyProps={{
                        variant: 'h7',
                        gutterBottom: true,
                        align: 'left',
                      }}
                      secondaryTypographyProps={{ align: 'left', variant: 'subtitle2' }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 700,
                        },
                        margin: 0,
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );



  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Container align={'center'} maxWidth={{ sm: 1, md: 900 }}>
          <Typography variant={'h6'} color={'text.primary'} align={'center'} >
            We see a great opportunity to grow into a <b>substantially-sized, high ROCE business</b> that sells <b>differentiated products to global
              leaders</b> across multiple industries.
          </Typography>
        </Container>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >

          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
        </Box>
      </Container>

    </Box>
  );
};

export default RevenueGrowth;
