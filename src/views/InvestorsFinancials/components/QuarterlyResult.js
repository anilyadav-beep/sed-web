import { Box, Button, Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Financial_Statement_FY_24_25 from '../../../assets/brochures/FinancialStatementfor-FY-2024-25.pdf';
import Financial_Statement_FY_22_23 from '../../../assets/brochures/FinancialReport _2022-23.pdf';
import Financial_Statement_FY_23_24 from '../../../assets/brochures/FinancialStatementfor-FY-2023-24.pdf';
import SEDEMAC_MGT_7_2022_23 from '../../../assets/brochures/SEDEMAC_MGT_7_2022_23.pdf';
import SEDEMAC_MGT_7_2023_24 from '../../../assets/brochures/SEDEMAC_MGT_7_2023_24.pdf';
import AnnualReport_SEDEMAC_2022_23 from '../../../assets/brochures/AnnualReport_SEDEMAC_2022-23.pdf';
import AnnualReport_SEDEMAC_2023_24 from '../../../assets/brochures/AnnualReport_SEDEMAC_2023-24.pdf';
import AnnualReport_SEDEMAC_2024_25 from '../../../assets/brochures/AnnualReport_SEDEMAC_2024-25.pdf';
import AnnualReturnFY2024_25 from '../../../assets/brochures/AnnualReturnFY2024-25.pdf';
import { Main } from 'layouts';
import Container from 'components/Container';
import { Link } from 'react-router-dom';

const annualReportTabs = [
  {
    year: '2025-26',
    reports: [
      {
        title: 'Link to our RHP',
        year: '2025-26',
        url: '/investors/other-information/ipo-offer-documents/drhp',
      },
    ],
  },
  {
    year: '2024-25',
    reports: [
      {
        title: 'Financial Statement FY 2024-25',
        url: Financial_Statement_FY_24_25,
      },
      {
        title: 'Annual Report FY 2024-25',
        url: AnnualReport_SEDEMAC_2024_25,
      },
      { title: 'Annual Return FY 2024-25', url: AnnualReturnFY2024_25 },
    ],
  },

  {
    year: '2023-24',
    reports: [
      {
        title: 'Financial Statement FY 2023-24',
        url: Financial_Statement_FY_23_24,
      },
      {
        title: 'Annual Report FY 2023-24',
        url: AnnualReport_SEDEMAC_2023_24,
      },
      { title: 'Annual Return FY 2023-24', url: SEDEMAC_MGT_7_2023_24 },
    ],
  },
  {
    year: '2022-23',
    reports: [
      {
        title: 'Financial Statement FY 2022-23',
        url: Financial_Statement_FY_22_23,
      },
      {
        title: 'Annual Report FY 2022-23',
        url: AnnualReport_SEDEMAC_2022_23,
      },
      { title: 'Annual Return FY 2022-23', url: SEDEMAC_MGT_7_2022_23 },
    ],
  },
];

const QuarterlyResult = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Main>
      <Container>
        <Box>
          {/* Tabs */}
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
            Financial Performance
          </Typography>
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
            {annualReportTabs.map((tab, index) => (
              <Tab key={index} label={tab.year} />
            ))}
          </Tabs>

          {/* Cards */}
          <Box display="flex" flexWrap="wrap" gap={4}>
            {annualReportTabs[selectedTab].reports.map((report, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#ffe3ccff',
                  borderRadius: 2,
                  p: 2.5,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                  width: { xs: '100%', sm: '48%', md: '23%' },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {report.year === '2025-26' ? (
                  <Link
                    to={report.url}
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

export default QuarterlyResult;
