import { Box, Container } from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState, useCallback } from 'react';
import { scrollToElement } from 'common/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import Committee from '@mui/icons-material/Group';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SvgIcon from '@mui/material/SvgIcon';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import useAnalyticsEventTracker from '../../../googleAnalytics/useAnalyticsEventTracker';
import NEWSPA from '../../../assets/brochures/NEWSPA.PDF';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const sections = [
  {
    title: 'Board of Directors & Committees',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance/board-of-directors-management-team',
  },
  {
    title: 'Management Team',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/more/about-us/teams',
  },
];

const BoardOfDirectors = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const gaEventTracker = useAnalyticsEventTracker('ISAAC-Contact');
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || jarallaxElems.length === 0) return;
      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };
    jarallaxInit();
  }, []);
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
              ml={{ xs: 0, md: 0 }}
              mt={{ xs: 2, md: 0 }}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 7 },
                fontSize: { xs: '28px', md: '36px' },
              }}
            >
              Board of Directors, Management Team
            </Typography>
            <Grid
              container
              // width="100%"
              spacing={6}
              display={'flex'}
              justifyContent="center"
              alignItems="center"
            >
              {sections.map((item, index) => (
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
                      // height: { xs: 120, md: 200 },
                      // borderRadius: { xs: 2, md: 4 },
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
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      {item.icon}
                      <Typography
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

export default BoardOfDirectors;
