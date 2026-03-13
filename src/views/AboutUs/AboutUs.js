import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline, Story, Team } from './components';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import Committee from '@mui/icons-material/Group';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card, CardContent, Grid, NoSsr, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  { title: 'Our Management' },
  { title: 'Management Team' },
  { title: 'Management Team' },
];

const cards = [
  {
    title: 'Board Of Directors',
    icon: <Founder fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance/board-of-directors-management-team',
  },
  {
    title: 'Committee of Board of Directors',
    icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/more/about-us/committee',
  },
  {
    title: 'Our Management',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/more/about-us/teams',
  },
];

const AboutUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Main>
      <Box>
        <Box
          minHeight={'100vh'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 8,
            paddingBottom: 8,
            position: 'relative',
          }}
        >
          <Container>
            <Headline />
          </Container>
          <Box marginTop={10}>
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => {
                  const section = document.getElementById('story');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          minHeight={"80vh"}
          id="story"
          // border={1}
          sx={{
            textAlign: 'flex-start',
            // p: { xs: 1, md: 3 },
            backgroundColor: '#fff',
            display: 'flex',

            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            // paddingTop: 8,
            // paddingBottom: 8,
            position: 'relative',
          }}
        >
          <Container paddingY={'0 !important'}>
            <Story />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default AboutUs;
