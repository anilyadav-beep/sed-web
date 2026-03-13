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
import innovativeControlBrochure from '../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
import useAnalyticsEventTracker from '../../googleAnalytics/useAnalyticsEventTracker';
import NEWSPA from '../../assets/brochures/NEWSPA.PDF';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
// import About from './components/About';

// const sections = [
//   // 'Founder & Directors',
//   'Disclosures as per Regulation 46 of SEBI LODR, 2015',
//   // 'Committee of Board of Directors',
//   // 'Annual Reports',
//   // 'Policies',
//   // 'IPO Offer Documents',
//   // 'Industry Report',
//   // 'Credit Ratings',
//   //  'Investor Calls',
//   // 'Other Disclosures',
// ];

const sections = [
  {
    title: 'Disclosures as per Regulation 46 of SEBI LODR, 2015',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance/disclosures',
  },
  {
    title: 'Codes And Policies',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance/codes-and-policies',
  },
  {
    title: 'Other Disclosures',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/corporate-governance/other-disclosures',
  },
  // {
  //   title: 'Codes And Policies Dummy',
  //   icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/corporate-governance/codes-and-policies-dummy',
  // },
  // {
  //   title: 'Board Of Directors',
  //   icon: <Founder fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/more/about-us/founders',
  // },
  // {
  //   title: 'Committee of Board of Directors',
  //   icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/more/about-us/committee',
  // },
  // {
  //   title: 'Our Management',
  //   icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/more/about-us/teams',
  // },
];

const directors = [
  {
    name: 'Ketan Bakshi',
    role: 'Founder and Chairman',
    location: 'Detroit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCbqUQf0O5ei2iq5ToPmrcfcwnJAAkRnjnWPAOwjjzVqpzFO8Ajw-nWzdvOm_E6IbFNY&usqp=CAU',
  },
  {
    name: 'Ketan Bakshi',
    role: 'Founder and Chairman',
    location: 'Detroit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCbqUQf0O5ei2iq5ToPmrcfcwnJAAkRnjnWPAOwjjzVqpzFO8Ajw-nWzdvOm_E6IbFNY&usqp=CAU',
  },
  {
    name: 'Ketan Bakshi',
    role: 'Founder and Chairman',
    location: 'Detroit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCbqUQf0O5ei2iq5ToPmrcfcwnJAAkRnjnWPAOwjjzVqpzFO8Ajw-nWzdvOm_E6IbFNY&usqp=CAU',
  },
  {
    name: 'Ketan Bakshi',
    role: 'Founder and Chairman',
    location: 'Detroit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCbqUQf0O5ei2iq5ToPmrcfcwnJAAkRnjnWPAOwjjzVqpzFO8Ajw-nWzdvOm_E6IbFNY&usqp=CAU',
  },
  {
    name: 'Ketan Bakshi',
    role: 'Founder and Chairman',
    location: 'Detroit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCbqUQf0O5ei2iq5ToPmrcfcwnJAAkRnjnWPAOwjjzVqpzFO8Ajw-nWzdvOm_E6IbFNY&usqp=CAU',
  },

  // Add more unique entries as needed...
];

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

const committees = [
  {
    title: 'Nomination & Remuneration Committee',
    members: [
      {
        name: 'Mr. Rajesh Sawhney',
        role: 'Non-executive Independent Director - Chairperson',
      },
      {
        name: 'Mr. Rahul Parikh',
        role: 'Non-executive Independent Director - Member',
      },
      {
        name: 'Mr. Ketan Bakshi',
        role: 'Chairman & Chief Executive Officer - Member',
      },
      {
        name: 'Mr. Dilip Patel',
        role: 'Non-executive Independent Director - Member',
      },
    ],
  },
  {
    title: 'Risk Management & Governance Committee',
    members: [
      {
        name: 'Mr. Nikhilesh Panchal',
        role: 'Non-executive Independent Director - Chairperson',
      },
      {
        name: 'Mrs. Madhu Dubhashi',
        role: 'Non-executive Independent Director - Member',
      },
      {
        name: 'Mr. Shashank Patkar',
        role: 'Professional Non-Executive Director – Member',
      },
    ],
  },
];

const investorContacts = [
  {
    title: 'Company Secretary & Compliance Officer',
    company: 'Neilsoft Limited',
    name: 'Chandrashekhar Ashok Nagarkar',
    address:
      'SEZ - Plot No. 21/2, Rajiv Gandhi Infotech Park, Hinjawadi Phase III, Pune - 411057, MH, India',
    phone: '+91 20 67062200',
    email: 'companysecretary@neilsoft.com',
  },
  {
    title: 'Registrar & Share Transfer Agents',
    company:
      'MUFG Intime India Private Limited (Formerly Link Intime India Private Limited)',
    name: 'Mr. Sunil Yadav',
    address:
      'C 101, 247 Park, L B S Marg, Vikhroli West, Mumbai - 400083, MH, India',
    phone: '022 – 4918 6270',
    email: 'rnt.helpdesk@linkintime.co.in',
  },
];

const annualReportTabs = [
  {
    year: '2023-24',
    reports: [
      {
        title: 'ITandFactory Consolidated Financial Statements 2023-24',
        url: '#',
      },
      { title: 'Neilsoft Inc Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Standalone Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2023-24', url: '#' },
    ],
  },
  {
    year: '2022-23',
    reports: [
      { title: 'Standalone Financial Statements F.Y. 2022-23', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2022-23', url: '#' },
      { title: 'Standalone Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Standalone Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2023-24', url: '#' },
    ],
  },
  {
    year: '2021-22',
    reports: [
      { title: 'Standalone Financial Statements F.Y. 2021-22', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2021-22', url: '#' },
      { title: 'Standalone Financial Statements F.Y. 2023-24', url: '#' },
      { title: 'Consolidated Financial Statements F.Y. 2023-24', url: '#' },
    ],
  },
];

const policiesData = [
  'Neilsoft Code of Conduct for Directors and KMP(LH)',
  'Neilsoft Code of Conduct on Insider Trading',
  'Neilsoft CSR Policy',
  'Neilsoft Determination of Materiality of Events',
  "Neilsoft Diversity of Board of Director's Policy",
  'Neilsoft Dividend Distribution Policy',
  'Neilsoft Evaluation of Performance of Board of Directors Policy',
  'Neilsoft Fair Disclosure UPSI Insider Trading',
  "Neilsoft Familiarization of ID's",
  'Neilsoft NRC Policy',
  'Neilsoft Policy on Material Subsidiary',
  'Neilsoft Policy on Preservation and Archival of Documents',
  'Neilsoft Policy on Prevention of Sexual Harassment',
  'Neilsoft Policy on Remuneration and Evaluation of Directors KMPSMP',
  'Neilsoft Related Party Transaction Policy',
  'Neilsoft Risk Management Policy',
];

const ipoDocuments = [
  { title: 'Red Herring Prospectus', fileUrl: '/docs/rhp.pdf' },
  { title: 'Draft Prospectus', fileUrl: '/docs/dp.pdf' },
  { title: 'Pricing Document', fileUrl: '/docs/pricing.pdf' },
  { title: 'Allotment Status', fileUrl: '/docs/allotment.pdf' },
  // Add more documents as needed
];

const industryReport = [
  { title: 'Red Herring Prospectus', fileUrl: '/docs/rhp.pdf' },
  { title: 'Draft Prospectus', fileUrl: '/docs/dp.pdf' },
];

const disclosureData = [
  {
    title:
      'Newspaper Publication - CG Application for appointment of Mr. Shashikanth Suryanarayanan as MD',
    fileUrl: NEWSPA,
  },
];

const CorporateGovernance = () => {
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
    // <Main>
    //   <Box
    //     // minHeight={'100vh'}
    //     display={'flex'}
    //     bgcolor={''}
    //     marginTop={8}
    //   >
    //     <Container>
    //       <Grid container spacing={3} justifyContent="start">
    //         {sections.map((item, index) => (
    //           <Grid item xs={12} sm={6} md={4} key={index}>
    //             <Card
    //               sx={{
    //                 backgroundColor: '#ffe3ccff',
    //                 borderRadius: 3,
    //                 boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    //                 transition: 'transform 0.3s ease',
    //                 height: 180,
    //                 '&:hover': {
    //                   transform: 'translateY(-4px)',
    //                 },
    //               }}
    //               onClick={() => navigate(item.link)} // Navigate to the specified link on click
    //             >
    //               <CardContent
    //                 sx={{
    //                   display: 'flex',
    //                   flexDirection: 'column',
    //                   justifyContent: 'space-between',
    //                   height: '100%',
    //                   p: 3,
    //                 }}
    //               >
    //                 {/* Top icon */}
    //                 <Box>{item.icon}</Box>

    //                 {/* Title and arrow */}
    //                 <Box
    //                   display="flex"
    //                   justifyContent="space-between"
    //                   alignItems="center"
    //                 >
    //                   <Typography
    //                     variant="h6"
    //                     sx={{
    //                       color: theme.palette.text.primary,
    //                       fontWeight: 'bold',
    //                       lineHeight: 1.3,
    //                     }}
    //                   >
    //                     {item.title}
    //                   </Typography>
    //                   <ArrowForwardIosIcon
    //                     sx={{ color: '#662804', fontSize: 18 }}
    //                   />
    //                 </Box>
    //               </CardContent>
    //             </Card>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //   </Box>
    // </Main>

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
              ml={{ xs: 5, md: 0 }}
              mt={{ xs: 2, md: 0 }}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 7 },
                fontSize: { xs: '28px', md: '36px' },
              }}
            >
              Corporate Governance
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
                  paddingY={{ xs: 3, md: 0 }}
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

export default CorporateGovernance;
