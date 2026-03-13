import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
  {
    media: 'https://www.youtube.com/embed/RgnPEu9oGqA',
    title: 'End User Feedback on ISG',
    description:
      'Fresh, globally relevant technologies are concieved, produced in-house.',
  },
  {
    media: 'https://www.youtube.com/embed/T1baFYNIGF0',
    title: 'Explainer Video: How ISG Works?',
    description: 'Build products and technologies for the electrified future.',
  },
];

const About = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          MORE ABOUT ISG
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
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
                  minHeight={300}
                  src={item.media}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  borderRadius={0}
                />
                <CardContent>
                  <Typography
                    fontWeight="15px"
                    align={'left'}
                    sx={{ fontWeight: 400 }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
