import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
// import { Headline, Story, Team } from './components';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import Committee from '@mui/icons-material/Group';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  ListItemText,
  NoSsr,
  Typography,
} from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';

const cards = [
  {
    title: 'Corporate Governance',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance',
  },
  {
    title: 'IPO Offer Documents',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents',
  },
];

const OtherInformation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Main>
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '100%',
          paddingY: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography
              color="#A03811"
              variant="h3"
              textAlign="center"
              // ml={{ xs: 5, md: 0 }}
              mt={{ xs: 2, md: 0 }}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 7 },
                fontSize: { xs: '28px', md: '36px' },
              }}
            >
              Other Information
            </Typography>
            <Grid
              container
              // width="100%"
              spacing={6}
              display={'flex'}
              justifyContent="center"
              alignItems="center"
            >
              {cards.map((item, index) => (
                <Grid
                  item
                  xs={10}
                  sm={4}
                  md={2.37}
                  key={index}
                  paddingY={{ xs: 3, md: 0 }}
                >
                  <Card
                    onClick={() => navigate(item.link)}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 200,
                      borderRadius: 4,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      backgroundColor: '#ffe3ccff',
                      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                      transition:
                        'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          mt: 1,
                          fontWeight: 'bold',
                          color: 'text.primary',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default OtherInformation;
