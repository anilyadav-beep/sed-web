import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Media from 'common/Media';

const mock = [
 
  {
    media: 'https://www.youtube.com/embed/T1baFYNIGF0?rel=0',
    title: `Explainer Video`,
    description: 'ISG And Its Working',
  },
  // {
  //   media: 'https://www.youtube.com/embed/RgnPEu9oGqA?rel=0',
  //   title: 'End User Feedback on ISG',
  //   description: 'Fresh, globally relevant technologies are concieved, produced in-house.',
  // },
  {
    media: 'https://www.youtube.com/embed/iLERPtMS_do?rel=0',
    title: 'Why ISG?',
    description: 'Provides Silent, Reliable Starts',
  },
  {
    media: 'https://www.youtube.com/embed/vk6sFNgRmlw',
    title: 'Why ISG?',
    description: 'Enables Features Like Torque Assist',
  },
  {
    media: 'https://www.youtube.com/embed/UxNowX8l-Io',
    title: "Why SEDEMAC's Sensorless ISG?",
    description: 'Improves Reliability',
  },
];

const About = () => {
  return (
    <Box mt={0} paddingY={{xs:10, md:0}}>
      <Box paddingY={2}>
        <Typography
          variant="h4"
          align={'center'}
          // data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          MORE ABOUT OUR ISG
        </Typography>
      </Box>
      <Grid container display="flex" justifyContent="center" spacing={2}>
        {mock.map((item, i) => (
          <Media item={item} key={i} i={i} type="ISG"/>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
