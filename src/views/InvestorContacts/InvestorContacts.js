// import { Box, Container } from '@mui/material';
// import { Main } from 'layouts';
// import React from 'react';
// import About from './components/About';
// import CodesPolicy from './components/CodesPolicy/CodesPolicy';

// const InvestorContacts = () => {
//   return (
//     <Main>
//       {/* <Box>
//         <Container>
//           <About />
//         </Container>
        
//       </Box> */}
//       <Box marginTop={10} marginBottom={4}>
//         <Container>
//           <CodesPolicy />
//         </Container>
//       </Box>
//     </Main>
//   );
// };

// export default InvestorContacts;


// import React from 'react';
// import {
//   Typography,
//   Box,
//   Button,
// } from '@mui/material';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import Policy from '../../../../assets/brochures/privacy-policy-mobile-flash-v2.pdf';

// const policies = [
//   { name: 'Andriod Application Privacy Policy', link: Policy },
// ];

// const ipoData = [
//   { name: 'IPO Red Herring Prospectus', link: Policy },
// ];

// const CodesAndPolicies = () => {
//   return (
//     <>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         mt={5}
//         mb={2}
//         sx={{ color: '#1e1e1e' }}
//       >
//         Codes & Policies
//       </Typography>
//       <Box
//         display="grid"
//         // mb={15}
//         gap={2} 
//         sx={{
//           backgroundColor: '#f1f1f1',
//           borderRadius: 2,
//           p: 5,
//           color: '#fff',
          
//         }}
//       >
//         <Box
//           display="grid"
//           gap={2} 
//           gridTemplateColumns={{
//             xs: '1fr', 
//             sm: '1fr 1fr',
//             md: '1fr 1fr',
//           }}
//         >
//           {policies.map((info, i) => (
//             <Box
//               key={i}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               sx={{
//                 backgroundColor: '#ffffff',
//                 borderRadius: 2,
//                 p: 2,
//                 color: '#1e1e1e',
//                 boxShadow: 0,
//                 '&:hover': { transform: 'translateY(-4px)', borderColor:"#000080" , border:"1px solid blue"},
//               }}
//             >
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 p={1}
//                 sx={{ color: '#1e1e1e' }}
//               >
//                 {info.name}
//               </Typography>
//               <Button
//                 variant="contained"
//                 href={info.link}
//                 target="_blank"
//                 onClick={() => gaEventTracker('ISAAC-Contact')}
//                 sx={{
//                   minWidth: '36px',
//                   width: '36px',
//                   height: '36px',
//                   padding: 0,
//                   borderRadius: '50%',
//                   border: 'none',
//                   backgroundColor: '#ffffff',
//                   '&:hover': {
//                     backgroundColor: '#e6e0e0',
//                   },
//                 }}
//               >
//                 <PictureAsPdfIcon sx={{ color: '#673ab7', flexShrink: 0 }} />
//               </Button>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         mt={5}
//         mb={2}
//         sx={{ color: '#1e1e1e' }}
//       >
//         IPO Offer Documents 
//       </Typography>
//       <Box
//         display="grid"
//         // mb={15}
//         gap={2} 
//         sx={{
//           backgroundColor: '#f1f1f1',
//           borderRadius: 2,
//           p: 5,
//           color: '#fff',
          
//         }}
//       >
//         <Box
//           display="grid"
//           gap={2} 
//           gridTemplateColumns={{
//             xs: '1fr', 
//             sm: '1fr 1fr',
//             md: '1fr 1fr',
//           }}
//         >
//           {ipoData.map((info, i) => (
//             <Box
//               key={i}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               sx={{
//                 backgroundColor: '#ffffff',
//                 borderRadius: 2,
//                 p: 2,
//                 color: '#1e1e1e',
//                 boxShadow: 0,
//                 '&:hover': { transform: 'translateY(-4px)', borderColor:"#000080" , border:"1px solid blue"},
//               }}
//             >
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 p={1}
//                 sx={{ color: '#1e1e1e' }}
//               >
//                 {info.name}
//               </Typography>
//               <Button
//                 variant="contained"
//                 href={info.link}
//                 target="_blank"
//                 onClick={() => gaEventTracker('ISAAC-Contact')}
//                 sx={{
//                   minWidth: '36px',
//                   width: '36px',
//                   height: '36px',
//                   padding: 0,
//                   borderRadius: '50%',
//                   border: 'none',
//                   backgroundColor: '#ffffff',
//                   '&:hover': {
//                     backgroundColor: '#e6e0e0',
//                   },
//                 }}
//               >
//                 <PictureAsPdfIcon sx={{ color: '#673ab7', flexShrink: 0 }} />
//               </Button>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default CodesAndPolicies;


import { Box, Container } from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  Grid, Card, CardContent, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import policy from '../../assets/brochures/privacy-policy-mobile-flash-v2.pdf';
import useAnalyticsEventTracker from '../../.../../googleAnalytics/useAnalyticsEventTracker';


const sections = [
  'Investor Related Queries',
  'Shareholder Related Queries',
];
const policyData = [
 { title: 'Andriod Application Privacy Policy', fileUrl: policy },
  { title: 'Andriod Application Privacy Policy', fileUrl: policy },
];

const InvestorContacts = () => {
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
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
  return (
   <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        bgcolor={''}
        paddingTop={0} 
      >
        <Container>
          {sections.map((title, index) => (
            <div key={index}>
              <Accordion
                expanded={expanded === `${index}`}
                onChange={handleChange(`${index}`)}
                sx={{ mt: 4, borderRadius: '10px', boxShadow: 1 }}
              >
                <AccordionSummary
                  expandIcon={
                    <div style={{ marginRight: '10px' }}>
                      <ExpandMoreIcon />
                    </div>
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    backgroundColor: '#fdfdfd !important',
                    boxShadow: '0px 2px 10px rgb(211, 211, 211)',
                    padding: 0,
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      boxShadow: '0px 4px 20px rgba(99, 98, 95, 0.1)',
                    },
                  }}
                >
                  <Typography
                    component="span"
                    variant="h7"
                    sx={{
                      width: '100%',
                      flexShrink: 0,
                      fontWeight: 500,
                      fontSize: 20,
                      marginLeft: '10px',
                      padding: '5px',
                    }}
                  >
                    {`${title}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {
                    title === 'Investor Related Queries' ? (
                    <Box sx={{ p: 2 }}>
                      <Grid container spacing={3}>
                        {policyData.map((doc, index) => (
                          <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                              variant="outlined"
                              sx={{
                                borderRadius: 2,
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'translateY(-4px)' },
                              }}
                            >
                              <CardContent
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}
                              >
                                <Typography variant="body1" fontWeight="500">
                                  {doc.title}
                                </Typography>
                                <Button
                                  variant="contained"
                                  href={doc.fileUrl}
                                  target="_blank"
                                  onClick={() =>
                                    gaEventTracker('ISAAC-Contact')
                                  }
                                  sx={{
                                    minWidth: '36px',
                                    width: '36px',
                                    height: '36px',
                                    padding: 0,
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: '#ffffff',
                                    // boxShadow: '0px 2px 6px #e6e0e0',
                                    '&:hover': {
                                      backgroundColor: '#e6e0e0',
                                    },
                                  }}
                                >
                                  <PictureAsPdfIcon />
                                </Button>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  ) :
                   title === 'Shareholder Related Queries' ? (
                    <Box sx={{ p: 2 }}>
                      <Grid container spacing={3}>
                        {/* {policyData.map((doc, index) => (
                          <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                              variant="outlined"
                              sx={{
                                borderRadius: 2,
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'translateY(-4px)' },
                              }}
                            >
                              <CardContent
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}
                              >
                                <Typography variant="body1" fontWeight="500">
                                  {doc.title}
                                </Typography>
                                <Button
                                  variant="contained"
                                  // href={innovativeControlBrochure}
                                  target="_blank"
                                  onClick={() =>
                                    gaEventTracker('ISAAC-Contact')
                                  }
                                  sx={{
                                    minWidth: '36px',
                                    width: '36px',
                                    height: '36px',
                                    padding: 0,
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: '#ffffff',
                                    // boxShadow: '0px 2px 6px #e6e0e0',
                                    '&:hover': {
                                      backgroundColor: '#e6e0e0',
                                    },
                                  }}
                                >
                                  <DownloadIcon />
                                </Button>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))} */}
                      </Grid>
                    </Box>
                  ) :
                  null}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}                
        </Container>
      </Box>
    </Main>
  );
};

export default InvestorContacts;


