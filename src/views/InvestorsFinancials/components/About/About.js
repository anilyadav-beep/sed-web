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

const About = () => {
  return (
    <Box>
      <Box marginTop={10}>
        <Typography
          variant="h3"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Corporate Governance
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          sx={{
            mt: 5,
            fontWeight: 200,
            textAlign: 'center',
          }}
        >
          Codes & Policies, Disclosures, Disclosures as per regulation 46 of SEBI LODR, 2015, and Announcements to Shareholders.
        </Typography>
      </Box>

      
    </Box>
  );
};

export default About;
