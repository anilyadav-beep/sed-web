import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Media from 'common/Media';
import { Card, CardContent } from '@mui/material';

const mock = [
  {
    media: 'https://www.youtube.com/embed/2hIIfJ39nss?rel=0',
    title: 'Creative Engineers Rule 👑',
    description:
      'We are built & run by high quality engineers, inveterate truth-seekers.',
  },
  {
    media: 'https://www.youtube.com/embed/nSpD2OIstSs?rel=0',
    title: 'Physics⚛ → Mass Production',
    description:
      'Find your fit in the entire gamut of activities in-house.',
  },
  {
    media: 'https://www.youtube.com/embed/fhGSVg_INfI?rel=0',
    title: 'We Pay💰 Well!',
    description:
      'We offer good salaries and ESOPs to those who de-risk our vision.',
  },
];

const About = () => {
  return (
    <Box height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems='center' mt={4}>
      <Box>
        <Typography
          variant="h3"
          align={'center'}
          gutterBottom
          sx={{
            color: '#A03811',
            fontWeight: 700,
          }}
        >
          Why Us?
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          sx={{
            // mt: 8,
            fontWeight: 200,
            textAlign: 'center',
          }}
        >
          Opportunities to build fresh, disruptive technologies here in India
          and/or be a part of scaling them globally.
        </Typography>
      </Box>

      <Box
        sx={{
          width:{ xs: '94%', sm: '100%', md: '100%' },
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          backgroundColor: '#fff',
          mt:4
        }}
      >
        <Grid
          container
          spacing={3}
          width={{ xs: '100%', md: '75%' }}
          mx="auto"
          justifyContent="center"
          alignItems="stretch" // ✅ makes all rows equal height
        >
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              display="flex" // ✅ allows card to stretch full height
            >
              <Card
                sx={{
                  width: '100%',
                  height: '100%', // ✅ uniform height
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                }}
              >
                {/* Video Section (fixed) */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/14',
                    overflow: 'hidden',
                    flexShrink: 0, // ✅ prevents resizing
                  }}
                >
                  <Box
                    component="iframe"
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    src={item.media}
                    allowFullScreen // Chrome, Safari, Edge
                    webkitAllowFullScreen // Safari iOS
                    mozAllowFullScreen // Firefox
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>

                {/* Card Content */}
                {/* <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h7" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Box display="flex" alignItems="center" marginY={2}>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent> */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    align="left"
                    sx={{ fontSize: 15, fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    align="left"
                    sx={{ fontWeight: 400, fontSize: 14 }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Grid xs={12}>
        {mock.map((item, i) => (
          <Media item={item} i={i} key={i} />
        ))}
      </Grid> */}
    </Box>
  );
};

export default About;
