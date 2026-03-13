import { Box, Container } from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState, useCallback } from 'react';
import { scrollToElement } from 'common/styles';
import Typography from '@mui/material/Typography';
import { Grid, Card } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SvgIcon from '@mui/material/SvgIcon';
import innovativeControlBrochure from '../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import AnnualReport_22_23 from '../../assets/brochures/FinancialReport _2022-23.pdf';
import AnnualReport_23_24 from '../../assets/brochures/FinancialReport _2023-24.pdf';
import AnnualReport_24_25 from '../../assets/brochures/FinancialReport _2024-25.pdf';
import SEDEMAC_MGT_7_2019_20 from '../../assets/brochures/SEDEMAC_MGT_7_2019_20.pdf';
import SEDEMAC_MGT_7_2020_21 from '../../assets/brochures/SEDEMAC_MGT_7_2020_21.pdf';
import SEDEMAC_MGT_7_2021_22 from '../../assets/brochures/SEDEMAC_MGT_7_2021_22.pdf';
import SEDEMAC_MGT_7_2022_23 from '../../assets/brochures/SEDEMAC_MGT_7_2022_23.pdf';
import SEDEMAC_MGT_7_2023_24 from '../../assets/brochures/SEDEMAC_MGT_7_2023_24.pdf';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
import TeamIcon from '@mui/icons-material/Groups';
import Committee from '@mui/icons-material/Group';
import CodesPolicy from './components/CodesPolicy/CodesPolicy';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const sections = [
  {
    title: 'Financial Performance',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/financial-information/financial-performance',
  },
  // {
  //   title: 'Annual Returns',
  //   icon: <Founder fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/financial-information/annual-returns',
  // },
  // {
  //   title: 'Annual Reports  & Results',
  //   icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/financial-information/annual-reports',
  // },
  {
    title: 'Investor Presentations',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/financial-information/Investor-presentations',
  },
  {
    title: 'Credit Ratings',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/financial-information/credit-ratings',
  },
];

const InvestorsFinancials = () => {
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
              // ml={{ xs: 5, md: 0 }}
              mt={{ xs: 2, md: 0 }}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 7 },
                fontSize: { xs: '28px', md: '36px' },
              }}
            >
              Financial Performance & Investor Presentations
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
                  md={2.4}
                  key={index}
                  paddingY={{ xs: 0, md: 0 }}
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

export default InvestorsFinancials;
