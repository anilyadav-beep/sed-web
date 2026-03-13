// import { Box, Typography } from '@mui/material';
// import Container from 'components/Container';
// import { Main } from 'layouts';
// import React from 'react';

// const investorContacts = [
//   {
//     title: 'Company Secretary & Compliance Officer',
//     company: 'Neilsoft Limited',
//     name: 'Chandrashekhar Ashok Nagarkar',
//     address:
//       'SEZ - Plot No. 21/2, Rajiv Gandhi Infotech Park, Hinjawadi Phase III, Pune - 411057, MH, India',
//     phone: '+91 20 67062200',
//     email: 'companysecretary@neilsoft.com',
//   },
//   {
//     title: 'Registrar & Share Transfer Agents',
//     company:
//       'MUFG Intime India Private Limited (Formerly Link Intime India Private Limited)',
//     name: 'Mr. Sunil Yadav',
//     address:
//       'C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083, MH, India',
//     phone: '022 – 4918 6270',
//     email: 'rnt.helpdesk@linkintime.co.in',
//   },
//   {
//     title: 'Registrar & Share Transfer Agents',
//     company:
//       'MUFG Intime India Private Limited (Formerly Link Intime India Private Limited)',
//     name: 'Mr. Sunil Yadav',
//     address:
//       'C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083, MH, India',
//     phone: '022 – 4918 6270',
//     email: 'rnt.helpdesk@linkintime.co.in',
//   },
//   // {
//   //   title: 'Registrar & Share Transfer Agents',
//   //   company:
//   //     'MUFG Intime India Private Limited (Formerly Link Intime India Private Limited)',
//   //   name: 'Mr. Sunil Yadav',
//   //   address:
//   //     'C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083, MH, India',
//   //   phone: '022 – 4918 6270',
//   //   email: 'rnt.helpdesk@linkintime.co.in',
//   // },
// ];

// const InvestorPresentations = () => {
//   return (
//     // <Main>
//     //   <Container>
//     //     <Box display="flex" flexDirection="column" gap={4}>
//     //       {investorContacts.map((info, i) => (
//     //         <Box
//     //           key={i}
//     //           sx={{
//     //             backgroundColor: '#ffffff',
//     //             borderRadius: 2,
//     //             p: 2,
//     //             color: '#fff',
//     //             boxShadow: 10,
//     //           }}
//     //         >
//     //           {/* <Typography
//     //             variant="subtitle1"
//     //             fontWeight="bold"
//     //             mb={2}
//     //             sx={{ color: '#1e1e1e' }}
//     //           >
//     //             {info.title}
//     //           </Typography> */}
//     //           <Box
//     //             display="grid"
//     //             gridTemplateColumns={{
//     //               xs: '1fr',
//     //               sm: '1fr 1fr',
//     //               md: 'repeat(4, 1fr)',
//     //             }}
//     //             gap={2}
//     //           >
//     //             <Box
//     //               sx={{
//     //                 border: '1px solid rgba(255,255,255,0.2)',
//     //                 borderColor: '#1e1e1e',
//     //                 borderRadius: 2,
//     //                 p: 4,
//     //                 lineHeight: 1.6,
//     //                 marginLeft: '10px',
//     //               }}
//     //             >
//     //               <Typography
//     //                 variant="body1"
//     //                 fontWeight="bold"
//     //                 sx={{ color: '#1e1e1e' }}
//     //               >
//     //                 {info.company}
//     //               </Typography>
//     //               <Typography fontWeight="bold" sx={{ color: '#1e1e1e' }}>
//     //                 {info.name}
//     //               </Typography>
//     //               <Typography variant="body2" sx={{ color: '#1e1e1e' }}>
//     //                 {info.address}
//     //               </Typography>
//     //               <Typography variant="body2" mt={1} sx={{ color: '#1e1e1e' }}>
//     //                 {info.phone}
//     //               </Typography>
//     //               <Typography
//     //                 variant="body2"
//     //                 component="a"
//     //                 href={`mailto:${info.email}`}
//     //                 sx={{
//     //                   color: '#1e1e1e',
//     //                   textDecoration: 'underline',
//     //                 }}
//     //               >
//     //                 {info.email}
//     //               </Typography>
//     //             </Box>
//     //           </Box>
//     //         </Box>
//     //       ))}
//     //     </Box>
//     //   </Container>
//     // </Main>

//     <Main>
//       <Container>
//         {/* Grid container to hold all cards */}
//         <Box
//           display="grid"
//           gridTemplateColumns={{
//             xs: '1fr',
//             sm: '1fr 1fr',
//             md: 'repeat(3, 1fr)',
//           }}
//           gap={3}
//         >
//           {investorContacts.map((info, i) => (
//             <Box
//               key={i}
//               sx={{
//                 backgroundColor: '#ffe3ccff',
//                 borderRadius: 2,
//                 p: 3,
//                 color: '#1e1e1e',
//                 boxShadow: 3,
//                 border: '1px solid rgba(0,0,0,0.1)',
//                 lineHeight: 1.6,
//               }}
//             >
//               <Typography variant="body1" fontWeight="bold">
//                 {info.company}
//               </Typography>
//               <Typography fontWeight="bold">{info.name}</Typography>
//               <Typography variant="body2">{info.address}</Typography>
//               <Typography variant="body2" mt={1}>
//                 {info.phone}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 component="a"
//                 href={`mailto:${info.email}`}
//                 sx={{
//                   color: '#1e1e1e',
//                   textDecoration: 'underline',
//                   wordBreak: 'break-word',
//                 }}
//               >
//                 {info.email}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Main>
//   );
// };

import { Box, Button, Card, Grid, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import { Main } from 'layouts';
import Container from 'components/Container';
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
    reports: [
      {
        title: 'Link to our RHP',
        url: '#',
        year: '2025-26',
        url: '/investors/other-information/ipo-offer-documents/drhp',
      },
    ],
  },
  // {
  //   year: '2022-23',
  //   reports: [{ title: 'Financial Statements FY 2023-24', url: '#' }],
  // },
];

const InvestorPresentations = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
            Investor Presentations
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
              width:{sx:"100%", sm:"50%", md:"23%"},
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
                    // variant="subtitle12"
                    to={report.url}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      paddingY={0.5}
                    >
                      {' '}
                      {report.title}
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Typography variant="subtitle12">{report.title}</Typography>
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

export default InvestorPresentations;
