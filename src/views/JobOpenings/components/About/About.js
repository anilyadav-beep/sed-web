import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Media from 'common/Media';
import { Card, CardContent } from '@mui/material';
// const mock = [
//   {
//     media: 'https://www.youtube.com/embed/vCvua6HZZY8',
//     title: 'Careers for Ambitious Engineers',
//     description: `If you are an ambitious, creative engineer then you'd like it here at SEDEMAC`,
//   },
// ];

const mock = [
  {
    media: 'https://www.youtube.com/embed/kK-ZHmMQgl4?rel=0',
    title: 'Fresh Technologies that see Global Scale 📈',
    description: 'Fresh, globally relevant technologies are concieved, produced in-house.',
  },
  {
    media: 'https://www.youtube.com/embed/MbnTVAaNLa4?rel=0',
    title: 'Ride on the Electrification⚡ Momentum',
    description: 'Build products and technologies for the electrified future.',
  },
  {
    media: 'https://www.youtube.com/embed/BH-AKKpLzxI?rel=0',
    title: 'Physics⚛ → Mass Production, in-house',
    description: 'Find your fit in the entire gamut of activities from product development to mass production.',
  },
  {
    media: 'https://www.youtube.com/embed/5ChaHfUc_YE?rel=0',
    title: 'Engineers Rule👑',
    description: 'We are built & run by high quality engineers, inveterate truth-seekers.',
  },
  {
    media: 'https://www.youtube.com/embed/YvuMt9b3kyA?rel=0',
    title: 'For Young, Ambitious Engineers 👨‍💻',
    description: 'We are a great pit-stop in your career journey, and for some, we become a home.',
  },
  {
    media: 'https://www.youtube.com/embed/dp4dELPHbgg?rel=0',
    title: 'We Pay💰 Well!',
    description: 'We offer good salaries and ESOPs to those who de-risk our vision.',
  },
];

const About = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Join Us
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          sx={{
            mt: 8,
            fontWeight: 200,
            textAlign: 'center',
          }}
        >
          Opportunities to build fresh, disruptive technologies here in India and/or be a part of scaling them globally.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <Box
                  component={'iframe'}
                  title="video"
                  width="100%"
                  height="100%"
                  minHeight={220}
                  src={item.media}
                  onClick={()=>gaEventTracker(item.title)}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  borderRadius={0}
                />
                <CardContent>
                  <Typography
                    variant={'h7'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Grid xs={12}>
        {mock.map((item, i) => (
          <Media item={item} i={i} key={i} />
        ))}
      </Grid> */}
    </Box>
  );
};

export default About;
