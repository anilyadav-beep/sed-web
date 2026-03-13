import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Main } from 'layouts';
import React from 'react';
import About from './components/About';
import CodesPolicy from './components/CodesPolicy/CodesPolicy';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import Committee from '@mui/icons-material/Group';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Codes & Policies',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    // link: '/investors/other-disclosures/codes-and-policies',
  },
  {
    title: 'IPO Offer Documents',
    icon: <Founder fontSize="large" sx={{ color: '#A03811' }} />,
    // link: '/investors/other-disclosures',
  },
  // {
  //   title: 'Investor Contacts',
  //   icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/investors-contacts',
  // },
  // { title: 'Operations Team', icon: <Committee fontSize="large" /> },
  // { title: 'Engineering', icon: <Committee fontSize="large" /> },
  // { title: 'Marketing', icon: <Committee fontSize="large" /> },
];

const InvestorsGovernance = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Main>
      {/* <Box>
        <Container>
          <About />
        </Container>
        
      </Box> */}
      <Box marginTop={10} marginBottom={4}>
        <Container>
          <Grid container spacing={3} justifyContent="start">
            {cards.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: '#ffe3ccff',
                    borderRadius: 3,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease',
                    height: 180,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                  onClick={() => navigate(item.link)} // Navigate to the specified link on click
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      p: 3,
                    }}
                  >
                    {/* Top icon */}
                    <Box>{item.icon}</Box>

                    {/* Title and arrow */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 'bold',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <ArrowForwardIosIcon
                        sx={{ color: '#662804', fontSize: 18 }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default InvestorsGovernance;
