import { Box, Container, Grid, Typography } from '@mui/material';
import { Main } from 'layouts';
import React from 'react';
import ArchivalPolicy from '../../../assets/brochures/Archival-Policy.pdf';
import CodeOfConductForBoDAndSMPs from '../../../assets/brochures/Code-of-Conduct-for-BoD-and-SMPs.pdf';
import CodeOfPracticesFairDisclosureOfUPSI from '../../../assets/brochures/CodeOfPracticesFairDisclosureOfUPSI.pdf';
import DeterminingMaterialSubsidiaries from '../../../assets/brochures/Determining-Material-Subsidiaries.pdf';
import DividendDistributionPolicy from '../../../assets/brochures/Dividend-Distribution-Policy.pdf';
import PolicyForDeterminationOfMateriality from '../../../assets/brochures/Policy-for-Determination-of-Materiality.pdf';
import PolicyForEvaluationOfPerformanceOfBoD from '../../../assets/brochures/Policy-for-Evaluation-of-performance-of-BoD.pdf';
import PolicyForFamiliarisationProgrammeForID from '../../../assets/brochures/Policy-for-Familiarisation-Programme-for-ID.pdf';
import InsiderTradingPolicy from '../../../assets/brochures/Insider-Trading-Policy.pdf';
import NominationAndRemunerationPolicy from '../../../assets/brochures/Nomination-and-Remuneration-Policy.pdf';
import PolicyForPreservationOfDocuments from '../../../assets/brochures/Policy-for-Preservation-of-Documents.pdf';
import PolicyToPromoteDiversityOfBOD from '../../../assets/brochures/Policy-to-promote-diversity-of-BOD.pdf';
import PolicyOnRelatedPartyTransactions from '../../../assets/brochures/Policy-on-Related-Party-Transactions.pdf';
import RiskManagementPolicy from '../../../assets/brochures/Risk-Management-Policy.pdf';
import SuccessionPolicyForTheBoardSMP from '../../../assets/brochures/Succession-Policy-for-the-Board-&-SMP.pdf';
import UPSILeakInquiryPolicy from '../../../assets/brochures/UPSI-Leak-Inquiry-Policy.pdf';
import WhistleBlowerPolicy from '../../../assets/brochures/Whistle-Blower-Policy.pdf';
import WhistleBlowerPolicyOperatingGuidelines from '../../../assets/brochures/Whistle-Blower-Policy-Operating-Guidelines.pdf';
import CSRPolicy from '../../../assets/brochures/CSR-Policy.pdf';
import { Link } from 'react-router-dom';

const policiesData = [
  { title: 'Archival Policy', url: ArchivalPolicy },
  {
    title: 'Code Of Conduct For BoD And SMPs',
    url: CodeOfConductForBoDAndSMPs,
  },
  {
    title: 'Code Of Practices Fair Disclosure Of UPSI',
    url: CodeOfPracticesFairDisclosureOfUPSI,
  },
  {
    title: 'Determining Material Subsidiaries',
    url: DeterminingMaterialSubsidiaries,
  },
  { title: 'Dividend Distribution Policy', url: DividendDistributionPolicy },
  {
    title: 'Policy For Determination Of Materiality',
    url: PolicyForDeterminationOfMateriality,
  },
  {
    title: 'Policy For Evaluation Of Performance Of BoD',
    url: PolicyForEvaluationOfPerformanceOfBoD,
  },
  {
    title: 'Policy For Familiarisation Programme For ID',
    url: PolicyForFamiliarisationProgrammeForID,
  },
  { title: 'Insider Trading Policy', url: InsiderTradingPolicy },
  {
    title: 'Nomination And Remuneration Policy',
    url: NominationAndRemunerationPolicy,
  },
  {
    title: 'Policy For Preservation Of Documents',
    url: PolicyForPreservationOfDocuments,
  },
  {
    title: 'Policy On Related Party Transactions',
    url: PolicyOnRelatedPartyTransactions,
  },
  {
    title: 'Policy To Promote Diversity Of BOD',
    url: PolicyToPromoteDiversityOfBOD,
  },
  { title: 'Risk Management Policy', url: RiskManagementPolicy },
  {
    title: 'Succession Policy For The Board & SMP',
    url: SuccessionPolicyForTheBoardSMP,
  },
  { title: 'UPSI Leak Inquiry Policy', url: UPSILeakInquiryPolicy },
  { title: 'Whistle Blower Policy', url: WhistleBlowerPolicy },
  {
    title: 'Whistle Blower Policy Operating Guidelines',
    url: WhistleBlowerPolicyOperatingGuidelines,
  },
  { title: 'CSR Policy', url: CSRPolicy },
  { title: 'Privacy Policy', url: '/company-terms' },
  { title: 'Cookie Policy ', url: '/cookies' },
  { title: 'Mobile Application Privacy Policy', url: '/mobile-app-policy' },
];
const CodesAndPolicyDummy = () => {
  return (
    <Main>
      <Container>
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Typography variant="h4" mt={5} gutterBottom>
            Codes and Policies
          </Typography>
          {policiesData.map((item, idx) => (
            // <Grid item xs={12} sm={6} md={4} key={idx}>
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                // sx={{
                //   display: 'flex',
                //   justifyContent: 'space-between',
                //   alignItems: 'center',
                //   px: 2,
                //   py: 2,
                //   bgcolor: '#ffe3ccff',
                //   borderRadius: 2,
                //   boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                //   fontWeight: 900,
                // }}
              >
                <Typography
                  variant="subtitle2"
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // padding={1}
                  sx={{
                    
                    textDecoration: 'none',
                    color: 'primary',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                 <li>{item.title}</li>
                </Typography>
              </Box>
            </Grid>

            // </Grid>
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default CodesAndPolicyDummy;
