import { Box, Button, Typography } from '@mui/material';
import Container from 'components/Container';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Main } from 'layouts';
import innovativeControlBrochure from '../../../assets/brochures/SEDEMACBROCHURE_Updated.pdf';
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
import CSRPolicy from '../../../assets/brochures/CSR-Policy.pdf';
// import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
// import NEWSPA from '../../../../assets/brochures/NEWSPA.PDF';



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

const CodesAndPolicies = () => {
  return (
    <Main>
      <Container>
        <Box sx={{ flexGrow: 1, marginTop:0 }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={2}
          >
            {policiesData.map((year, idx) => (
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

export default CodesAndPolicies;
