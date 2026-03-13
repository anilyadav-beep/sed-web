import { Box, Container } from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState, useCallback } from 'react';
import { scrollToElement } from 'common/styles';
import Typography from '@mui/material/Typography';
import {
  Grid,
  Card,
} from '@mui/material';
import useAnalyticsEventTracker from '../../../../../googleAnalytics/useAnalyticsEventTracker';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';


const sections = [
  {
    title: 'Agreements',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/agreements',
  },
  {
    title: 'Resolutions',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/Resolutions',
  },
  {
    title: 'Consents',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/Consents',
  },
];

const MiscellaneousIPO = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
      <Container>
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
                Miscellaneous
              </Typography>
              <Grid
                container
              spacing={6}
                justifyContent="center" // centers items horizontally
                alignItems="center"
              >
                {sections.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12} // 1 per row mobile
                    sm={4} // 3 per row tablet
                    md={3} // 4 per row laptop
                    lg={2.4} // 5 per row desktop (12 / 2.4 = 5)
                    display="flex"
                    justifyContent="center" // ensures card is centered inside
                  >
                    <Card
                      onClick={() => navigate(item.link)}
                      sx={{
                        width: '100%',
                      height: 200,
                      borderRadius: 4,
                        cursor: 'pointer',
                        overflow: 'hidden',
                        backgroundColor: '#ffe3ccff',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                        transition:
                          'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                            fontSize: {
                              xs: '0.85rem',
                              sm: '0.9rem',
                              md: '1rem',
                            },
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
      </Container>
    </Main>
  );
};

export default MiscellaneousIPO;
