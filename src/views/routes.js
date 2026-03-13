import React from 'react';

import {
  Landing as LandingView,
  ForSmallEngines as SmallEnginesView,
  ForEVs as EVView,
  ForGenerators as GeneratorsView,
  ForPowerTools as PowerToolsView,
  ForEBikesTools as EBikesToolsView,
  ProductISG as ISGView,
  ProductEFI as EFIView,
  ProductVRR as VRRView,
  // ProductOT150 as OT150View,
  ProductActuator as ActuatorView,
  ProductGCU as GCUView,
  ProductHubDrive as HubDriveView,
  ProductMidDrive as MidDriveView,
  ProductBatteryChg as BatteryChgView,
  ProductIsaac as IsaacView,
  ProductLSISSI as LSISSIView,
  CareerListing as CareerListingView,
  ContactPage as ContactPageView,
  AboutUs as AboutUsView,
  Investors as InvestorsView,
  InvestorsGovernance,
  // InvestorsFinancials,
  CompanyTerms as CompanyTermsView,
  CookiePolicy as CookiePolicyView,
  NotFound as NotFoundView,
  Technology as TechnologyView,
  // GTMISAAC as GTMISAACView,
  // ISAACSpec3500 as ISAACSpec3500View,
  // ISAACSpec1500 as ISAACSpec1500View,
  // ISAACSpec350 as ISAACSpec350View,
  BlogReachView as BlogReachView,
  BlogArticle as BlogArticle,
  OPE,
  Motors,
  ISGEFI,
  CommercialVehicles,
  CorporateGovernance,
  AndroidAppPolicy,
  OtherInformation,
} from 'views';
import BlogArticleGC from './BlogArticleGC/BlogArticle';
import { InvestorsFinancials } from './InvestorsFinancials';
import { InvestorContacts } from './InvestorContacts';
import JobOpenings from './JobOpenings/JobOpenings';
import { Team } from './AboutUs/components';
import Founders from './AboutUs/components/FoundersDirectors/Founders';
import Committee from './AboutUs/components/CommitteeOfBoard/Committee';
import QuarterlyResult from './InvestorsFinancials/components/QuarterlyResult';
import AnnualReturns from './InvestorsFinancials/components/AnnualReturns';
import AnnualReports from './InvestorsFinancials/components/AnnualReports';
import CreditRatings from './InvestorsFinancials/components/CreditRatings';
import InvestorPresentations from './InvestorsFinancials/components/InvestorPresentations';
import CodesAndPolicies from './CorporateGovernance/components/CodesAndPolicies';
import IPOOffersDocuments from './OtherInformations/components/IpoOfferDocuments/IPOOffersDocuments';
import Disclosures from './CorporateGovernance/components/Disclosures';
import DRHP from './OtherInformations/components/IpoOfferDocuments/DRHP/DRHP';
import IndustryReports from './OtherInformations/components/IpoOfferDocuments/IndustryReports/IndustryReports';
import Agreements from './OtherInformations/components/IpoOfferDocuments/Agreements/Agreements';
import Certificates from './OtherInformations/components/IpoOfferDocuments/Certificates/Certificates';
import Resolutions from './OtherInformations/components/IpoOfferDocuments/Resolutions/Resolutions';
import Consents from './OtherInformations/components/IpoOfferDocuments/Consents/Consents';
import MaterialContracts from './OtherInformations/components/IpoOfferDocuments/MaterialContracts/MaterialContracts';
import ACMProduct from './CommercialVehicle/components/ACMProduct/ACMProduct';
import Miscellaneous from './CorporateGovernance/components/Miscellaneous';
import AuditCommittee from './AboutUs/components/CommitteeOfBoard/AuditCommittee';
import NominationCommittee from './AboutUs/components/CommitteeOfBoard/NominationCommittee';
import StakeholderCommittee from './AboutUs/components/CommitteeOfBoard/StakeholderCommittee';
import RiskManagementCommittee from './AboutUs/components/CommitteeOfBoard/RiskManagementCommittee';
import CorporateSocialommittee from './AboutUs/components/CommitteeOfBoard/CorporateSocialommittee';
import CodesAndPolicyDummy from './CorporateGovernance/components/CodesAndPolicyDummy';
import OtherDisclosures from './CorporateGovernance/components/OtherDisclosures';
import BoardOfDirectors from './CorporateGovernance/components/BoardOfDirectors';
import MiscellaneousIPO from './OtherInformations/components/IpoOfferDocuments/Miscellaneous/MiscellaneousIPO';
import DRHPAV from './OtherInformations/components/IpoOfferDocuments/DRHP/DRHPAV';
import DRHPAVHINDI from './OtherInformations/components/IpoOfferDocuments/DRHP/DRHPAVHINDI';
import RHPENGLISH from './OtherInformations/components/IpoOfferDocuments/DRHP/RHPENGLISH';
import RHPHINDI from './OtherInformations/components/IpoOfferDocuments/DRHP/RHPHINDI';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <LandingView {...params} />,
  },
  {
    path: '/isg',
    renderer: (params = {}) => <ISGView {...params} />,
  },
  {
    path: '/efi',
    renderer: (params = {}) => <EFIView {...params} />,
  },
  {
    path: '/isgefi',
    renderer: (params = {}) => <ISGEFI {...params} />,
  },
  {
    path: '/vrr',
    renderer: (params = {}) => <VRRView {...params} />,
  },
  {
    path: '/battery-chargers',
    renderer: (params = {}) => <BatteryChgView {...params} />,
  },
  {
    path: '/gcu',
    renderer: (params = {}) => <GCUView {...params} />,
  },
  {
    path: '/acm',
    renderer: (params = {}) => <ACMProduct {...params} />,
  },
  {
    path: '/gas-genset-fuel-injection',
    renderer: (params = {}) => <LSISSIView {...params} />,
  },
  {
    path: '/e-gov',
    renderer: (params = {}) => <ActuatorView {...params} />,
  },
  {
    path: '/traction-controllers',
    renderer: (params = {}) => <IsaacView {...params} />,
  },
  // {
  //   path: '/traction-controllers/gtm',
  //   renderer: (params = {}) => <GTMISAACView {...params} />,
  // },
  // {
  //   path: '/traction-controllers/isaac3500/spec',
  //   renderer: (params = {}) => <ISAACSpec3500View {...params} />,
  // },
  // {
  //   path: '/traction-controllers/isaac1500/spec',
  //   renderer: (params = {}) => <ISAACSpec1500View {...params} />,
  // },
  // {
  //   path: '/traction-controllers/isaac350/spec',
  //   renderer: (params = {}) => <ISAACSpec350View {...params} />,
  // },
  {
    path: '/more/about-us/teams',
    renderer: (params = {}) => <Team {...params} />,
  },
  {
    path: '/more/about-us/committee',
    renderer: (params = {}) => <Committee {...params} />,
  },
  {
    path: '/more/about-us/committee/audit-committee',
    renderer: (params = {}) => <AuditCommittee {...params} />,
  },
  {
    path: '/more/about-us/committee/nomination-committee',
    renderer: (params = {}) => <NominationCommittee {...params} />,
  },
  {
    path: '/more/about-us/committee/stakeholder-committee',
    renderer: (params = {}) => <StakeholderCommittee {...params} />,
  },
  {
    path: '/more/about-us/committee/risk-management-committee',
    renderer: (params = {}) => <RiskManagementCommittee {...params} />,
  },
  {
    path: '/more/about-us/committee/corporate-social-committee',
    renderer: (params = {}) => <CorporateSocialommittee {...params} />,
  },
  {
    path: '/investors/corporate-governance/board-of-directors-management-team',
    renderer: (params = {}) => <Founders {...params} />,
  },
  {
    path: '/careers/why-us',
    renderer: (params = {}) => <CareerListingView {...params} />,
  },
  {
    path: '/careers/job-openings',
    renderer: (params = {}) => <JobOpenings {...params} />,
  },
  {
    path: '/more/blogs',
    renderer: (params = {}) => <BlogReachView {...params} />,
  },
  {
    path: '/blog/isgefi',
    renderer: (params = {}) => <BlogArticle {...params} />,
  },
  {
    path: '/blog/mgensets',
    renderer: (params = {}) => <BlogArticleGC {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}) => <ContactPageView {...params} />,
  },
  // {
  //   path: '/technology',
  //   renderer: (params = {}) => <TechnologyView {...params} />,
  // },
  {
    path: '/products/small-engines',
    renderer: (params = {}) => <SmallEnginesView {...params} />,
  },
  {
    path: '/products/outdoor-powered-equipment',
    renderer: (params = {}) => <OPE {...params} />,
  },
  {
    path: '/products/small-evs',
    renderer: (params = {}) => <EVView {...params} />,
  },
  {
    path: '/products/e-bikes',
    renderer: (params = {}) => <EBikesToolsView {...params} />,
  },
  {
    path: '/hub-drive',
    renderer: (params = {}) => <HubDriveView {...params} />,
  },
  {
    path: '/mid-drive',
    renderer: (params = {}) => <MidDriveView {...params} />,
  },
  {
    path: '/products/generators',
    renderer: (params = {}) => <GeneratorsView {...params} />,
  },
  {
    path: '/products/power-tools',
    renderer: (params = {}) => <PowerToolsView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}) => <CompanyTermsView {...params} />,
  },
  {
    path: '/android-app-policy',
    renderer: (params = {}) => <AndroidAppPolicy {...params} />,
  },
  {
    path: '/cookies',
    renderer: (params = {}) => <CookiePolicyView {...params} />,
  },
  {
    path: '/more/about-us',
    renderer: (params = {}) => <AboutUsView {...params} />,
  },
  {
    path: '/investors/home',
    renderer: (params = {}) => <InvestorsView {...params} />,
  },
  {
    path: '/investors/corporate-governance/other-disclosures',
    renderer: (params = {}) => <OtherDisclosures {...params} />,
  },
  {
    path: '/investors/corporate-governance/board-of-directors',
    renderer: (params = {}) => <BoardOfDirectors {...params} />,
  },
  {
    path: '/investors/other-information',
    renderer: (params = {}) => <OtherInformation {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents',
    renderer: (params = {}) => <IPOOffersDocuments {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/miscellaneous',
    renderer: (params = {}) => <MiscellaneousIPO {...params} />,
  },
  {
    path: '/investors/other-information/miscellaneous',
    renderer: (params = {}) => <Miscellaneous {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/drhp',
    renderer: (params = {}) => <DRHP {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/drhp-av-eng',
    renderer: (params = {}) => <DRHPAV {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/rhp-av-eng',
    renderer: (params = {}) => <RHPENGLISH {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/rhp-av-hindi',
    renderer: (params = {}) => <RHPHINDI {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/drhp-av-hindi',
    renderer: (params = {}) => <DRHPAVHINDI {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/industry-reports',
    renderer: (params = {}) => <IndustryReports {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/agreements',
    renderer: (params = {}) => <Agreements {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/Certificates',
    renderer: (params = {}) => <Certificates {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/Resolutions',
    renderer: (params = {}) => <Resolutions {...params} />,
  },
  {
    path: '/investors/corporate-governance/codes-and-policies-dummy',
    renderer: (params = {}) => <CodesAndPolicyDummy {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/Consents',
    renderer: (params = {}) => <Consents {...params} />,
  },
  {
    path: '/investors/other-information/ipo-offer-documents/material-contracts',
    renderer: (params = {}) => <MaterialContracts {...params} />,
  },
  {
    path: '/investors/financial-information/financial-performance',
    renderer: (params = {}) => <QuarterlyResult {...params} />,
  },
  {
    path: '/investors/financial-information/annual-returns',
    renderer: (params = {}) => <AnnualReturns {...params} />,
  },
  {
    path: '/investors/financial-information/annual-reports',
    renderer: (params = {}) => <AnnualReports {...params} />,
  },
  {
    path: '/investors/financial-information/credit-ratings',
    renderer: (params = {}) => <CreditRatings {...params} />,
  },
  {
    path: '/investors/financial-information/Investor-presentations',
    renderer: (params = {}) => <InvestorPresentations {...params} />,
  },
  {
    path: '/investors/investors-contacts',
    renderer: (params = {}) => <InvestorContacts {...params} />,
  },
  {
    path: '/investors/financial-information',
    renderer: (params = {}) => <InvestorsFinancials {...params} />,
  },
  {
    path: '/investors/corporate-governance',
    renderer: (params = {}) => <CorporateGovernance {...params} />,
  },
  {
    path: '/investors/corporate-governance/disclosures',
    renderer: (params = {}) => <Disclosures {...params} />,
  },
  {
    path: '/investors/corporate-governance/codes-and-policies',
    renderer: (params = {}) => <CodesAndPolicies {...params} />,
  },

  {
    path: '/mobile-app-policy',
    renderer: (params = {}) => <AndroidAppPolicy {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/motors',
    renderer: (params = {}) => <Motors {...params} />,
  },
  {
    path: '/products/commercial-vehicles',
    renderer: (params = {}) => <CommercialVehicles {...params} />,
  },
];

export default routes;
