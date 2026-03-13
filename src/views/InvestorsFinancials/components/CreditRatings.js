import { Box, Button, Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import { Main } from 'layouts';
import Container from 'components/Container';
import ICRARATING_24_25 from '../../../assets/brochures/ICRA_RATING_2024_25.pdf';
import ICRARATING_23_24 from '../../../assets/brochures/ICRA_RATING_2023_24.pdf';
import INDIARATING_23_24 from '../../../assets/brochures/India_Rating_2023_24.pdf';
import INDIARATING_24_25 from '../../../assets/brochures/India_Rating_2024_25.pdf';
import { Link } from 'react-router-dom';

const quarterlyReports = [
  'Annual Return 2023-24',
  'Annual Return 2022-23',
  'Annual Return 2021-22',
  'Annual Return 2020-21',
  'Annual Return 2019-20',
  'Annual Return 2018-19',
];

const annualReportTabs = [
  {
    year: '2025-26',
    reports: [],
  },
  {
    year: '2024-25',
    reports: [
      {
        title: 'India Ratings & Research 2024-25',
        url: INDIARATING_24_25,
        year: '2024-25',
      },
      {
        title: 'ICRA Ratings 2024-25',
        url: ICRARATING_24_25,
        year: '2024-25',
      },
    ],
  },
  {
    year: '2023-24',
    reports: [
      {
        title: 'India Ratings & Research 2023-24',
        url: INDIARATING_23_24,
        year: '2023-24',
      },
      { title: 'ICRA Ratings 2023-24', url: ICRARATING_23_24, year: '2023-24' },
    ],
  },
];

const CreditRatings = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Main>
      <Container>
        <Box>
          <Typography
            color="#A03811"
            variant="h3"
            textAlign="center"
            // ml={{ xs: 5, md: 0 }}
            mt={{ xs: 0, md: -2 }}
            sx={{
              fontWeight: 700,
              mb: { xs: 3, md: 3 },
              fontSize: { xs: '28px', md: '36px' },
            }}
          >
            Credit Ratings
          </Typography>
          {/* Tabs */}
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="Year Tabs"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              mb: 3,
              p: 1,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
              borderRadius: 2,
            }}
          >
            {CreditRatings &&
              annualReportTabs.map((tab, index) => (
                <Tab key={index} label={tab.year} />
              ))}
          </Tabs>

          {/* Cards */}
          <Box display="flex" flexWrap="wrap" gap={4}>
            {CreditRatings &&
              annualReportTabs[selectedTab].reports.map((report, index) => (
                // <Box
                //   key={index}
                //   sx={{
                //     bgcolor: '#ffe3ccff',
                //     borderRadius: 2,
                //     p: 2,
                //     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                //     width: { xs: '100%', sm: '48%', md: '23%' },
                //     display: 'flex',
                //     justifyContent: 'space-between',
                //     alignItems: 'center',
                //   }}
                // >
                //   {report.year === '2025-26' ? (
                //     <Link
                //       variant="subtitle12"
                //       to={report.url}
                //       style={{ textDecoration: 'none', color: 'inherit' }}
                //     >
                //       {report.title}
                //     </Link>
                //   ) : (
                //     <>
                //       <Typography variant="subtitle12">
                //         {report.title}
                //       </Typography>
                //       <Button
                //         variant="contained"
                //         href={report.url}
                //         target="_blank"
                //         onClick={() => gaEventTracker('ISAAC-Contact')}
                //         sx={{
                //           minWidth: '36px',
                //           width: '36px',
                //           height: '36px',
                //           padding: 0,
                //           borderRadius: '50%',
                //           border: 'none',
                //           backgroundColor: '#ffe3ccff',
                //           // boxShadow: '0px 2px 6px #e6e0e0',
                //           '&:hover': {
                //             backgroundColor: '#e6e0e0',
                //           },
                //         }}
                //       >
                //         <DownloadIcon fontSize="small" />
                //       </Button>
                //     </>
                //   )}
                // </Box>
                <Box
                  key={index}
                  sx={{
                    bgcolor: '#ffe3ccff',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                    width: { xs: '100%', sm: '48%', md: '23%' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {report.year === '2025-26' ? (
                    <Link
                      // variant="subtitle2"
                      to={report.url}
                      // fontWeight="500"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography
                        variant="subtitle2"
                        fontWeight="500"
                        paddingY={1}
                      >
                        {' '}
                        {report.title}
                      </Typography>
                    </Link>
                  ) : (
                    <>
                      <Typography variant="subtitle2" fontWeight="500">
                        {report.title}
                      </Typography>
                      <Button
                        variant="contained"
                        href={report?.url}
                        target="_blank"
                        onClick={() => gaEventTracker('ISAAC-Contact')}
                        sx={{
                          minWidth: '36px',
                          width: '36px',
                          height: '36px',
                          padding: 0,
                          borderRadius: '50%',
                          border: 'none',
                          backgroundColor: '#ffe3ccff',
                          // boxShadow: '0px 2px 6px #e6e0e0',
                          '&:hover': {
                            backgroundColor: '#e6e0e0',
                          },
                        }}
                      >
                        <DownloadIcon fontSize="small" />
                      </Button>
                    </>
                  )}
                </Box>
              ))}
          </Box>
        </Box>
      </Container>
    </Main>
  );
};

export default CreditRatings;
