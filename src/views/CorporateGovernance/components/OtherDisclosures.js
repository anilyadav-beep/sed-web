import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import Container from 'components/Container';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Main } from 'layouts';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import ArticlesOfAssociation from '../../../assets/brochures/ArticlesOfAssociation.pdf';
import MemorandumOfAssociation from '../../../assets/brochures/MemorandumOfAssociation.pdf';
import NEWSPA from '../../../assets/brochures/NEWSPA.PDF';

const annualReturns = [
  'Annual Return 2023-24',
  'Annual Return 2022-23',
  'Annual Return 2021-22',
  'Annual Return 2020-21',
  'Annual Return 2020-21',
  'Annual Return 2019-20',
  'Annual Return 2018-19',
  'Annual Return 2017-18',
  'Annual Return 2016-17',
  'Annual Return 2015-16',
  'Annual Return 2014-15',
];
const disclosureData = [
  {
    title: 'Newspaper Publication',
    fileUrl: NEWSPA,
  },
  // {
  //   title: 'Dummy 1',
  //   fileUrl: NEWSPA,
  // },
  // {
  //   title: 'Dummy 2',
  //   fileUrl: NEWSPA,
  // },
];

const OtherDisclosures = () => {
  return (
    <Main>
      <Container>
        <Box
                  sx={{ p: 0, mt: 0 }}
                  minHeight="60vh"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
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
                    Other Disclosures
                  </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {disclosureData.map((item, idx) => (
              // <Grid item xs={12} sm={6} md={4} key={index} >
              //   <Card
              //     variant="elevation"
              //     sx={{
              //       bgcolor:"#ffe3ccff",
              //       borderRadius: 2,
              //       boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
              //       transition: 'transform 0.2s',
              //       '&:hover': { transform: 'translateY(-4px)' },
              //     }}
              //   >
              //     <CardContent
              //       sx={{
              //         display: 'flex',
              //         justifyContent: 'space-between',
              //         alignItems: 'center',
              //       }}
              //     >
              //       <Typography variant="subtitle2" fontWeight="500">
              //         {doc.title}
              //       </Typography>
              //       <Button
              //         variant="contained"
              //         href={innovativeControlBrochure}
              //         target="_blank"
              //         onClick={
              //           () => handleOpenPDF(doc.fileUrl)
              //           // gaEventTracker('disclosure')
              //         }
              //         sx={{
              //           minWidth: '36px',
              //           width: '36px',
              //           height: '36px',
              //           padding: 0,
              //           borderRadius: '50%',
              //           border: 'none',
              //           bgcolor:"#ffe3ccff",
              //           // boxShadow: '0px 2px 6px #e6e0e0',
              //           '&:hover': {
              //             backgroundColor: '#e6e0e0',
              //           },
              //         }}
              //       >
              //         <DownloadIcon />
              //       </Button>
              //     </CardContent>
              //   </Card>
              // </Grid>
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
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
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Button
                    variant="contained"
                    href={item.fileUrl}
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
      </Container>
    </Main>
  );
};

export default OtherDisclosures;
