import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import AnnualReport_22_23 from '../../../assets/brochures/FinancialReport _2022-23.pdf';
import AnnualReport_23_24 from '../../../assets/brochures/FinancialReport _2023-24.pdf';
import AnnualReport_24_25 from '../../../assets/brochures/FinancialReport _2024-25.pdf';
import SEDEMAC_MGT_7_2019_20 from '../../../assets/brochures/SEDEMAC_MGT_7_2019_20.pdf';
import SEDEMAC_MGT_7_2020_21 from '../../../assets/brochures/SEDEMAC_MGT_7_2020_21.pdf';
import SEDEMAC_MGT_7_2021_22 from '../../../assets/brochures/SEDEMAC_MGT_7_2021_22.pdf';
import SEDEMAC_MGT_7_2022_23 from '../../../assets/brochures/SEDEMAC_MGT_7_2022_23.pdf';
import SEDEMAC_MGT_7_2023_24 from '../../../assets/brochures/SEDEMAC_MGT_7_2023_24.pdf';
import { Box, Button, Grid, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const annualReportTabs = [
  {
    title: 'Financial Statements 2022-23',
    url: AnnualReport_22_23,
  },
  { title: 'Financial Statements 2023-24', url: AnnualReport_23_24 },
  { title: 'Financial Statements 2024-25', url: AnnualReport_24_25 },
  { title: 'Annual Return FY 2019-20', url: SEDEMAC_MGT_7_2019_20 },
  { title: 'Annual Return FY 2020-21', url: SEDEMAC_MGT_7_2020_21 },
  {
    title: 'Annual Return FY 2021-22',
    url: SEDEMAC_MGT_7_2021_22,
  },
  { title: 'Annual Return FY 2022-23', url: SEDEMAC_MGT_7_2022_23 },
  { title: 'Annual Return FY 2023-24', url: SEDEMAC_MGT_7_2023_24 },
];

const annualReturns = [
  { title: 'Annual Return FY 2019-20', url: SEDEMAC_MGT_7_2019_20 },
  { title: 'Annual Return FY 2020-21', url: SEDEMAC_MGT_7_2020_21 },
  {
    title: 'Annual Return FY 2021-22',
    url: SEDEMAC_MGT_7_2021_22,
  },
  { title: 'Annual Return FY 2022-23', url: SEDEMAC_MGT_7_2022_23 },
  { title: 'Annual Return FY 2023-24', url: SEDEMAC_MGT_7_2023_24 },
];

const AnnualReports = () => {
  return (
    <Main>
      <Container sx={{mt: 0}}>
        <Typography variant="h4" mb={2}>Annual Reports & Results</Typography>
        <Box>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {annualReportTabs?.map((report, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 2,
                    bgcolor: '#ffe3ccff',
                    borderRadius: 2,
                    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                    fontWeight: 900,
                  }}
                >
                  <Typography variant="subtitle2">{report.title}</Typography>
                  <Button
                    variant="contained"
                    href={report.url}
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Typography variant="h4" paddingY={2}>Annual Results</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {annualReturns.map((returns, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 5,
                    bgcolor: '#ffe3ccff',
                    borderRadius: 2,
                    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                    fontWeight: 900,
                  }}
                >
                  <Typography variant="body1">{returns.title}</Typography>
                  <Button
                    variant="contained"
                    href={returns.url}
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Main>
  );
};

export default AnnualReports;
