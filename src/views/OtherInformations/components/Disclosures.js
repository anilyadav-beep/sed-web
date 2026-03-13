import { Box, Button, Typography } from '@mui/material';
import Container from 'components/Container';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Main } from 'layouts';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';



const annualReturns = [
  'Annual Return 2023-24',
  'Annual Return 2022-23',
  'Annual Return 2021-22',
  'Annual Return 2020-21',
  'Annual Return 2019-20',
  'Annual Return 2018-19',
  'Annual Return 2017-18',
  'Annual Return 2016-17',
  'Annual Return 2015-16',
  'Annual Return 2014-15',
];

const Disclosures = () => {
  return (
    <Main>
      <Container>
        <Box sx={{ flexGrow: 1, marginTop:-5 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={2}
          >
            {annualReturns.map((year, idx) => (
              <Box
                key={idx}
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
                <Typography variant="body1">{year}</Typography>
                <Button
                  variant="contained"
                  href={innovativeControlBrochure}
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
            ))}
          </Box>
        </Box>
      </Container>
    </Main>
  );
};

export default Disclosures;
