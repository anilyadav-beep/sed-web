import { Box, Container } from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState, useCallback } from 'react';
import { scrollToElement } from 'common/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import ArchivalPolicy from '../../../../assets/brochures/Archival-Policy.pdf';
import CodeOfConductForBoDAndSMPs from '../../../../assets/brochures/Code-of-Conduct-for-BoD-and-SMPs.pdf';
import CodeOfPracticesFairDisclosureOfUPSI from '../../../../assets/brochures/CodeOfPracticesFairDisclosureOfUPSI.pdf';
import DeterminingMaterialSubsidiaries from '../../../../assets/brochures/Determining-Material-Subsidiaries.pdf';
import DividendDistributionPolicy from '../../../../assets/brochures/Dividend-Distribution-Policy.pdf';
import PolicyForDeterminationOfMateriality from '../../../../assets/brochures/Policy-for-Determination-of-Materiality.pdf';
import PolicyForEvaluationOfPerformanceOfBoD from '../../../../assets/brochures/Policy-for-Evaluation-of-performance-of-BoD.pdf';
import PolicyForFamiliarisationProgrammeForID from '../../../../assets/brochures/Policy-for-Familiarisation-Programme-for-ID.pdf';
import InsiderTradingPolicy from '../../../../assets/brochures/Insider-Trading-Policy.pdf';
import NominationAndRemunerationPolicy from '../../../../assets/brochures/Nomination-and-Remuneration-Policy.pdf';
import PolicyForPreservationOfDocuments from '../../../../assets/brochures/Policy-for-Preservation-of-Documents.pdf';
import PolicyToPromoteDiversityOfBOD from '../../../../assets/brochures/Policy-to-promote-diversity-of-BOD.pdf';
import PolicyOnRelatedPartyTransactions from '../../../../assets/brochures/Policy-on-Related-Party-Transactions.pdf';
import RiskManagementPolicy from '../../../../assets/brochures/Risk-Management-Policy.pdf';
import SuccessionPolicyForTheBoardSMP from '../../../../assets/brochures/Succession-Policy-for-the-Board-&-SMP.pdf';
import UPSILeakInquiryPolicy from '../../../../assets/brochures/UPSI-Leak-Inquiry-Policy.pdf';
import WhistleBlowerPolicy from '../../../../assets/brochures/Whistle-Blower-Policy.pdf';
import CSRPolicy from '../../../../assets/brochures/CSR-Policy.pdf';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import NEWSPA from '../../../../assets/brochures/NEWSPA.PDF';
// import About from './components/About';
import CodesPolicy from '../CodesPolicy/CodesPolicy';

const sections = [
  // 'Founder & Directors',
  'Codes and Policies',
  // 'Committee of Board of Directors',
  'IPO Offer Documents',
  // 'Policies',
  // 'IPO Offer Documents',
  // 'Industry Report',
  // 'Credit Ratings',
  // 'Investor Calls',
  // 'Other Disclosures',
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
  { title: 'Neilsoft Inc Financial Statements F.Y. 2023-24', url: '#' },
  { title: 'Standalone Financial Statements F.Y. 2023-24', url: '#' },
  { title: 'Consolidated Financial Statements F.Y. 2023-24', url: '#' },
];
const policiesData = [
  { title: 'Archival Policy', url: ArchivalPolicy },
  { title: 'Code Of Conduct For BoD And SMPs', url: CodeOfConductForBoDAndSMPs },
  { title: 'Code Of Practices Fair Disclosure Of UPSI', url: CodeOfPracticesFairDisclosureOfUPSI },
  { title: 'Determining Material Subsidiaries', url: DeterminingMaterialSubsidiaries },
  { title: 'Dividend Distribution Policy', url: DividendDistributionPolicy },
  { title: 'Policy For Determination Of Materiality', url: PolicyForDeterminationOfMateriality },
  { title: 'Policy For Evaluation Of Performance Of BoD', url: PolicyForEvaluationOfPerformanceOfBoD },
  { title: 'Policy For Familiarisation Programme For ID', url: PolicyForFamiliarisationProgrammeForID },
  { title: 'Insider Trading Policy', url: InsiderTradingPolicy },
  { title: 'Nomination And Remuneration Policy', url: NominationAndRemunerationPolicy },
  { title: 'Policy For Preservation Of Documents', url: PolicyForPreservationOfDocuments },
  { title: 'Policy On Related Party Transactions', url: PolicyOnRelatedPartyTransactions },
  { title: 'Policy To Promote Diversity Of BOD', url: PolicyToPromoteDiversityOfBOD },
  { title: 'Risk Management Policy', url: RiskManagementPolicy },
  { title: 'Succession Policy For The Board & SMP', url: SuccessionPolicyForTheBoardSMP },
  { title: 'UPSI Leak Inquiry Policy', url: UPSILeakInquiryPolicy },
  { title: 'Whistle Blower Policy', url: WhistleBlowerPolicy },
  { title: 'CSR Policy', url: CSRPolicy },
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

const CodesAndPolicies = () => {
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
  const scrollTo = useCallback((id) => scrollToElement(id), []);
  const [expanded, setExpanded] = useState(false);
  const [expandedFirst, setExpandedFirst] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setExpandedFirst(
      panel === 'panel1' ? true : isExpanded === false ? true : false,
    );
  };
  const handleTabChange = (event, newValue) => setSelectedTab(newValue);
  const handleOpenPDF = useCallback((url) => {
    window.open(url, '_blank');
  }, []);
  return sections.map((title, index) => (
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
            title === 'Codes and Policies' ? (
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                  }}
                  gap={2}
                >
                  {policiesData.map((policy, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 3,
                        py: 3,
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                        fontWeight: 900,
                      }}
                    >
                      <Typography variant="body2">{policy.title}</Typography>
                      <Button
                        variant="contained"
                        href={policy.url}
                        target="_blank"
                        onClick={() => gaEventTracker('ISAAC-Contact')}
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
                        <DownloadIcon fontSize="small" />
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : 

            title === 'IPO Offer Documents' ? (
              <Box>
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="Year Tabs"
                  textColor="primary"
                  indicatorColor="primary"
                  sx={{ mb: 3 }}
                >
                  {annualReportTabs.map((tab, index) => (
                    <Tab key={index} label={tab.year} />
                  ))}
                </Tabs>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {annualReportTabs[selectedTab].reports.map(
                    (report, index) => (
                      <Box
                        key={index}
                        sx={{
                          bgcolor: '#fff',
                          borderRadius: 2,
                          p: 2,
                          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                          width: { xs: '100%', sm: '48%', md: '23%' },
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography fontSize="14px" fontWeight="500">
                          {report.title}
                        </Typography>
                        <Button
                          variant="contained"
                          // href={innovativeControlBrochure}
                          target="_blank"
                          onClick={() => gaEventTracker('ISAAC-Contact')}
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
                          <DownloadIcon fontSize="small" />
                        </Button>
                      </Box>
                    ),
                  )}
                </Box>
              </Box>
            ) : 
            title === 'Credit Ratings' ? (
              <Box sx={{ p: 2 }}>
                <Grid container spacing={3}>
                  {industryReport.map((doc, index) => (
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
                            onClick={() => gaEventTracker('ISAAC-Contact')}
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
                  ))}
                </Grid>
              </Box>
            ) : title === 'Investor calls' ? (
              <Box display="flex" flexDirection="column" gap={4}>
                {investorContacts.map((info, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: '#ffffff',
                      borderRadius: 2,
                      p: 2,
                      color: '#fff',
                      boxShadow: 10,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      mb={2}
                      sx={{ color: '#1e1e1e' }}
                    >
                      {info.title}
                    </Typography>
                    <Box
                      display="grid"
                      gridTemplateColumns={{
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: 'repeat(4, 1fr)',
                      }}
                      gap={2}
                    >
                      <Box
                        sx={{
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderColor: '#1e1e1e',
                          borderRadius: 2,
                          p: 4,
                          lineHeight: 1.6,
                          marginLeft: '10px',
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ color: '#1e1e1e' }}
                        >
                          {info.company}
                        </Typography>
                        <Typography fontWeight="bold" sx={{ color: '#1e1e1e' }}>
                          {info.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#1e1e1e' }}>
                          {info.address}
                        </Typography>
                        <Typography
                          variant="body2"
                          mt={1}
                          sx={{ color: '#1e1e1e' }}
                        >
                          {info.phone}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="a"
                          href={`mailto:${info.email}`}
                          sx={{
                            color: '#1e1e1e',
                            textDecoration: 'underline',
                          }}
                        >
                          {info.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : null
          }
        </AccordionDetails>
      </Accordion>
    </div>
  ));
};

export default CodesAndPolicies;
