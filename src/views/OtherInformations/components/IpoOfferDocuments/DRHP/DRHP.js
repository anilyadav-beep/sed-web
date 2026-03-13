import {
  Box,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';
import Container from 'components/Container';
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import SEDEMACMECHATRONICSLIMITED_DRHP from '../../../../../assets/brochures/SEDEMACMECHATRONICSLIMITEDDRHP.pdf';
import SEDEMACMECHATRONICSLIMITED_RHP from '../../../../../assets/brochures/SEDEMACMECHATRONICSLIMITEDRHP.pdf';
import SEDEMAC_PROSPECTUS from '../../../../../assets/brochures/SEDEMAC_Prospectus.pdf';
import Price_Band_Advertisement_Final_V6 from '../../../../../assets/brochures/Price_Band_Advertisement_Final_V6.pdf';
import { Main } from 'layouts';
import { useNavigate } from 'react-router-dom';

const prospectusData = [
  {
    title: 'Prospectus',
    url: SEDEMAC_PROSPECTUS,
    icon: DownloadIcon,
  },
  {
    title: 'Price Band Advertisement',
    url: Price_Band_Advertisement_Final_V6,
    icon: DownloadIcon,
  },
  // {
  //   title: 'Red Herring Prospectus',
  //   url: SEDEMACMECHATRONICSLIMITED_RHP,
  //   icon: DownloadIcon,
  // },
  // {
  //   title: 'RHP Audio-Visual (English)',
  //   url: '',
  //   icon: PlayCircleOutline,
  // },
  // {
  //   title: 'RHP Audio-Visual (Hindi)',
  //   url: '',
  //   icon: PlayCircleOutline,
  // },
  // {
  //   title: 'Draft Red Herring Prospectus',
  //   url: SEDEMACMECHATRONICSLIMITED_DRHP,
  //   icon: DownloadIcon,
  // },
  // {
  //   title: 'DRHP Audio-Visual (English)',
  //   url: '',
  //   icon: PlayCircleOutline,
  // },
  // {
  //   title: 'DRHP Audio-Visual (Hindi)',
  //   url: '',
  //   icon: PlayCircleOutline,
  // },
];
const prospectusData2 = [
  {
    title: 'Red Herring Prospectus',
    url: SEDEMACMECHATRONICSLIMITED_RHP,
    icon: DownloadIcon,
  },
  {
    title: 'RHP Audio-Visual (English)',
    url: '',
    icon: PlayCircleOutline,
  },
  {
    title: 'RHP Audio-Visual (Hindi)',
    url: '',
    icon: PlayCircleOutline,
  },
  {
    title: 'Draft Red Herring Prospectus',
    url: SEDEMACMECHATRONICSLIMITED_DRHP,
    icon: DownloadIcon,
  },
  {
    title: 'DRHP Audio-Visual (English)',
    url: '',
    icon: PlayCircleOutline,
  },
  {
    title: 'DRHP Audio-Visual (Hindi)',
    url: '',
    icon: PlayCircleOutline,
  },
];

const DRHP = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  const [openSecond, setOpenSecond] = useState(false);
  const [selectedUrlSecond, setSelectedUrlSecond] = useState('');
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [openFifth, setOpenFifth] = useState(false);
  const [selectedUrlFifth, setSelectedUrlFifth] = useState('');
  const [openSixth, setOpenSixth] = useState(false);
  const [openSeven, setOpenSeven] = useState(false);
  const [selectedUrlSeven, setSelectedUrlSeven] = useState('');

  const handleOpenModal = (url) => {
    setSelectedUrl(url);
    setOpen(true);
  };
  const handleOpenModalSecond = (url) => {
    setSelectedUrlSecond(url);
    setOpenSecond(true);
  };
  const handleOpenModalThird = (url) => {
    setOpenThird(true);
  };
  const handleOpenModalFourth = (url) => {
    setOpenFourth(true);
  };
  const handleOpenModalFifth = (url) => {
    setSelectedUrlFifth(url);
    setOpenFifth(true);
  };
  const handleOpenModalSixth = (url) => {
    setOpenSixth(true);
  };
  const handleOpenModalSeven = (url) => {
    setSelectedUrlSeven(url);
    setOpenSeven(true);
  };
  const handleConfirm = () => {
    window.open(selectedUrl, '_blank');
    setOpen(false);
  };
  const handleConfirmSecond = () => {
    window.open(selectedUrlSecond, '_blank');
    setOpenSecond(false);
  };
  const handleConfirmThird = () => {
    navigate('/investors/other-information/ipo-offer-documents/rhp-av-eng');
    setOpenThird(false);
  };

  const handleConfirmFourth = (url) => {
    navigate('/investors/other-information/ipo-offer-documents/rhp-av-hindi');
    setOpenFourth(false);
  };
  const handleConfirmFifth = () => {
    window.open(selectedUrlFifth, '_blank');
    setOpenFifth(false);
  };
  const handleConfirmSixth = () => {
    navigate('/investors/other-information/ipo-offer-documents/drhp-av-eng');
    setOpenSixth(false);
  };
  const handleConfirmSeven = () => {
    navigate('/investors/other-information/ipo-offer-documents/drhp-av-hindi');
    setOpenSeven(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancelSecond = () => {
    setOpenSecond(false);
  };
  const handleCancelThird = () => {
    setOpenThird(false);
  };

  const handleCancelFourth = () => {
    setOpenFourth(false);
  };
  const handleCancelFifth = () => {
    setOpenFifth(false);
  };
  const handleCancelSixth = () => {
    setOpenSixth(false);
  };
  const handleCancelSeven = () => {
    setOpenSeven(false);
  };
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
            Prospectus
          </Typography>

          <Grid
            container
            spacing={3}
            py={3}
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            {prospectusData.map((items, idx) => {
              const IconComponent = items?.icon;
              return (
                <React.Fragment key={idx}>
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
                      <Typography variant="subtitle2">{items.title}</Typography>
                      <Button
                        variant="contained"
                        onClick={() =>
                          idx === 0
                            ? handleOpenModal(items.url)
                            : window.open(items.url, '_blank')
                        }
                        sx={{
                          minWidth: '36px',
                          width: '36px',
                          height: '36px',
                          padding: 0,
                          borderRadius: '50%',
                          backgroundColor: '#ffe3ccff',
                          '&:hover': { backgroundColor: '#e6e0e0' },
                        }}
                      >
                        <IconComponent fontSize="small" />
                      </Button>
                    </Box>
                  </Grid>
                  {/* Confirmation Modal */}
                  {items.title === 'Prospectus' ? (
                    <Dialog
                      open={open}
                      onClose={handleCancel}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          PLEASE READ THIS NOTICE CAREFULLY. IT APPLIES TO ALL
                          PERSONS WHO VIEW THIS WEBSITE. THESE MATERIALS ARE NOT
                          DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS
                          LOCATED OUTSIDE INDIA. THESE MATERIALS ARE BEING MADE
                          AVAILABLE ON THIS WEBSITE TO COMPLY WITH SECURITIES
                          AND EXCHANGE BOARD OF INDIA (ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS) REGULATIONS, 2018, AS
                          AMENDED.
                        </b>
                        <br />
                        <br />{' '}
                        <b>
                          IMPORTANT: You must read and agree with the terms and
                          conditions of the following disclaimer
                          <br /> before
                          <br /> continuing.
                        </b>
                        <br /> <br /> The following disclaimer applies to the
                        prospectus of SEDEMAC Mechatronics Limited (the
                         <b> "Company"</b>) dated March 6, 2026 (the  <b>"Prospectus"</b>) filed
                        with the Registrar of Companies, Maharashtra at Pune
                        (<b>"RoC"</b>), and thereafter with Securities and Exchange
                        Board of India (<b>"SEBI"</b>), BSE Limited and the National
                        Stock Exchange of India Limited and hosted on this
                        website in connection with the initial public offering
                        of the equity shares of face value of ₹ 10 each (<b>“Equity
                        Shares”</b>) of the Company (the <b>“Offer”</b>). You are advised
                        to read the following notice carefully before reading,
                        accessing or making any other use of the Prospectus. By
                        accessing the Prospectus, you agree to be bound by the
                        following terms and conditions, including any
                        modifications to them from time to time.
                        <br />
                        <br />
                        Access to the Prospectus does not constitute a
                        recommendation by the Company, ICICI Securities Limited,
                        Avendus Capital Private Limited and Axis Capital Limited
                        (collectively, the “<b>Book Running Lead Managers</b>”), the
                        members of the Syndicate (as defined in the Prospectus)
                        or any of their respective affiliates or any other
                        person to subscribe to the Equity Shares offered in the
                        Offer.
                        <br />
                        <br /> The Prospectus is directed at, and is intended
                        for distribution to, and use by, residents of India
                        only. The information in this portion of our website,
                        including the Prospectus, is not intended for, and may
                        not be accessed in or by, or is not for publication or
                        distribution, directly or indirectly, in or into the
                        United States. The contents of the Prospectus is for
                        your information only, and you acknowledge that access
                        to the Prospectus is intended for use by you only and
                        you agree not to forward the Prospectus on to any other
                        person, internal or external to your company, in whole
                        or in part, or otherwise provide access via e-mail or
                        otherwise to any person. No part of the contents of the
                        Prospectus shall be copied or duplicated in any form by
                        any means or redistributed.
                        <br />
                        <br />
                        The Prospectus has been hosted on this website as
                        prescribed under Regulation 26 of the Securities and
                        Exchange Board of India (Issue of Capital and Disclosure
                        Requirements) Regulations, 2018, as amended (the <b>“SEBI
                        ICDR Regulations”</b>). Our Company has taken all necessary
                        steps to ensure that the contents of the Prospectus as
                        appearing on this website are identical to the
                        Prospectus filed with the RoC, SEBI, BSE Limited and the
                        National Stock Exchange of India Limited. You are
                        reminded that documents transmitted in electronic form
                        may be altered or changed during the process of
                        transmission and consequently, neither the Company, nor
                        any of its affiliates, directors, agents, officers,
                        representatives, advisers or employees accepts any
                        liability or responsibility whatsoever in respect of
                        alterations or changes which have taken place during the
                        course of transmission of electronic data.
                        <br />
                        <br />
                        The Equity Shares have not been recommended by any U.S.
                        federal or state securities commission or regulatory
                        authority. Furthermore, the foregoing authorities have
                        not confirmed the accuracy or determined the adequacy of
                        the Prospectus or approved or disapproved the Equity
                        Shares. Any representation to the contrary is a criminal
                        offence in the United States. In making an investment
                        decision investors must rely on their own examination of
                        our Company and the terms of the Offer, including the
                        merits and risks involved.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the <b>“U.S. Securities Act”</b>), and may not be
                        offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the Equity Shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The information in the Prospectus is as of the date
                        thereof and none of the Company, the Book Running Lead
                        Managers or their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        are under any obligation to update or revise the
                        Prospectus to reflect circumstances arising after the
                        date thereof.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids (as defined in the Prospectus) may not be
                        made by persons in any such jurisdiction, except in
                        compliance with the applicable laws of such
                        jurisdiction.
                        <br />
                        <br />
                        Any person into whose possession the Prospectus comes is
                        required to inform himself or herself about and to
                        observe any such restrictions. Potential investors
                        should have not relied on the draft red herring
                        prospectus dated November 10, 2025 filed by the Company
                        for any investment decision.
                        <br />
                        <br />
                        Invitations to subscribe to or purchase the Equity
                        Shares in the Offer should have made pursuant to the red
                        herring prospectus dated February 25, 2026 (<b>“Red Herring
                        Prospectus”</b>) if the recipient is in India or the
                        preliminary offering memorandum for the Offer, which
                        comprised the red herring prospectus and the preliminary
                        international wrap for the Offer, if the recipient is
                        outside India. No person outside India was eligible to
                        Bid for Equity Shares in the Offer unless that person
                        had received the preliminary offering memorandum for the
                        Offer, which contained the selling restrictions for the
                        Offer outside India.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        Equity Shares involves a high degree of risk and for
                        details relating to such risk, please see the section
                        titled <i>“Risk Factors”</i> of the Red Herring Prospectus and
                        Prospectus.
                        <br />
                        <br />
                        Neither the Company, nor any of its affiliates,
                        directors, agents, officers, representatives, advisers
                        or employees do not accept any liability whatsoever,
                        direct or indirect, and will be not be responsible or
                        have any responsibility of any kind for any loss or
                        damage that could result from interception and
                        interpretation by any third parties of any information
                        being made available to you through this website. The
                        Company and its affiliates cannot and do not guarantee
                        the accuracy, timeliness or completeness of the
                        information being made available to you in the
                        Prospectus beyond the date of the Prospectus. The
                        information contained in the Prospectus may not be
                        updated since its original publication date and may not
                        reflect the latest updates. The Company and its
                        affiliates will not be responsible for any loss to any
                        person or entity caused by any shortcoming, defect or
                        inaccuracy which may have inadvertently or otherwise
                        crept into the website. Neither the Company, nor any of
                        its affiliates nor their directors, officers and
                        employees will be liable or have any responsibility of
                        any kind for any loss or damage that you incur in the
                        event of any failure or disruption of this website, or
                        resulting from the act or omission of any other party
                        involved in making this website or the data contained
                        therein available to you, or from any other cause
                        relating to your access to, inability to access, or use
                        of the website or these materials.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via our website does not constitute
                        a part of the Prospectus.
                        <br />
                        <br />
                        If you are not permitted to view the materials on this
                        website or are in any doubt as to whether you are
                        permitted to view these materials, please exit this
                        webpage.
                        <br />
                        <br />
                        To access this information, you must confirm by pressing
                        on the button marked "I Confirm" that, at the time of
                        access you are located and resident in India. If you
                        cannot make this confirmation, you must press the button
                        marked "I Do Not Confirm".
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to subscribe or buy or sell securities of
                        the Company in the United States or in any other
                        jurisdiction, including without limitation, India
                      </DialogContent>
                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancel}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirm}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : null}
                </React.Fragment>
              );
            })}
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            {prospectusData2.map((items, idx) => {
              const IconComponent = items?.icon;
              return (
                <React.Fragment key={idx}>
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
                      <Typography variant="subtitle2">{items.title}</Typography>
                      <Button
                        variant="contained"
                        onClick={() =>
                          idx === 0
                            ? handleOpenModalSecond(items.url)
                            : idx === 1
                            ? handleOpenModalThird(items.url)
                            : idx === 2
                            ? handleOpenModalFourth(items.url)
                            : idx === 3
                            ? handleOpenModalFifth(items.url)
                            : idx === 4
                            ? handleOpenModalSixth(items.url)
                            : idx === 5
                            ? handleOpenModalSeven(items.url)
                            : window.open(items.url, '_blank')
                        }
                        sx={{
                          minWidth: '36px',
                          width: '36px',
                          height: '36px',
                          padding: 0,
                          borderRadius: '50%',
                          backgroundColor: '#ffe3ccff',
                          '&:hover': { backgroundColor: '#e6e0e0' },
                        }}
                      >
                        <IconComponent fontSize="small" />
                      </Button>
                    </Box>
                  </Grid>
                  {/* Confirmation Modal */}

                  {items.title === 'Red Herring Prospectus' ? (
                    <Dialog
                      open={openSecond}
                      onClose={handleCancelSecond}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          PLEASE READ THIS NOTICE CAREFULLY. IT APPLIES TO ALL
                          PERSONS WHO VIEW THIS WEBSITE. THESE MATERIALS ARE NOT
                          DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS
                          LOCATED OUTSIDE INDIA. THESE MATERIALS ARE BEING MADE
                          AVAILABLE ON THIS WEBSITE TO COMPLY WITH SECURITIES
                          AND EXCHANGE BOARD OF INDIA (ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS) REGULATIONS, 2018, AS
                          AMENDED.
                        </b>
                        <br />
                        <br />{' '}
                        <b>
                          IMPORTANT: You must read and agree with the terms and
                          conditions of the following disclaimer
                          <br /> before
                          <br /> continuing.
                        </b>
                        <br /> <br /> The following disclaimer applies to the
                        red herring prospectus of SEDEMAC Mechatronics Limited
                        (the <b>“Company”</b>) dated February 25, 2026 (the
                        <b> “Red Herring Prospectus”</b>) filed with the
                        Registrar of Companies, Maharashtra at Pune (
                        <b>"RoC"</b>), and thereafter with Securities and
                        Exchange Board of India (<b>“SEBI”</b>), BSE Limited and
                        the National Stock Exchange of India Limited and hosted
                        on this website in connection with the initial public
                        offering of the equity shares of face value of ₹ 10 each
                        (<b>“Equity Shares”</b>) of the Company (the{' '}
                        <b>“Offer”</b>). You are advised to read the following
                        notice carefully before reading, accessing or making any
                        other use of the Red Herring Prospectus. By accessing
                        the Red Herring Prospectus, you agree to be bound by the
                        following terms and conditions, including any
                        modifications to them from time to time.
                        <br />
                        <br />
                        Access to the Red Herring Prospectus does not constitute
                        a recommendation by the Company, ICICI Securities
                        Limited, Avendus Capital Private Limited and Axis
                        Capital Limited (collectively, the
                        <b>“Book Running Lead Managers”</b>), the members of the
                        Syndicate (as defined in the Red Herring Prospectus) or
                        any of their respective affiliates or any other person
                        to subscribe to the Equity Shares offered in the Offer.
                        <br />
                        <br /> The Red Herring Prospectus is directed at, and is
                        intended for distribution to, and use by, residents of
                        India only. The information in this portion of our
                        website, including the Red Herring Prospectus, is not
                        intended for, and may not be accessed in or by, or is
                        not for publication or distribution, directly or
                        indirectly, in or into the United States. The contents
                        of the Red Herring Prospectus is for your information
                        only, and you acknowledge that access to the Red Herring
                        Prospectus is intended for use by you only and you agree
                        not to forward the Red Herring Prospectus on to any
                        other person, internal or external to your company, in
                        whole or in part, or otherwise provide access via e-mail
                        or otherwise to any person. No part of the contents of
                        the Red Herring Prospectus shall be copied or duplicated
                        in any form by any means or redistributed.
                        <br />
                        <br />
                        The Red Herring Prospectus has been hosted on this
                        website as prescribed under Regulation 26 of the
                        Securities and Exchange Board of India (Issue of Capital
                        and Disclosure Requirements) Regulations, 2018, as
                        amended (the <b>“SEBI ICDR Regulations”</b>). Our
                        Company has taken all necessary steps to ensure that the
                        contents of the Red Herring Prospectus as appearing on
                        this website are identical to the Red Herring Prospectus
                        filed with the RoC, SEBI, BSE Limited and the National
                        Stock Exchange of India Limited.You are reminded that
                        documents transmitted in electronic form may be altered
                        or changed during the process of transmission and
                        consequently, neither the Company, nor any of its
                        affiliates, directors, agents, officers,
                        representatives, advisers or employees accepts any
                        liability or responsibility whatsoever in respect of
                        alterations or changes which have taken place during the
                        course of transmission of electronic data.
                        <br />
                        <br />
                        The Equity Shares have not been recommended by any U.S.
                        federal or state securities commission or regulatory
                        authority. Furthermore, the foregoing authorities have
                        not confirmed the accuracy or determined the adequacy of
                        the Red Herring Prospectus or approved or disapproved
                        the Equity Shares. Any representation to the contrary is
                        a criminal offence in the United States. In making an
                        investment decision investors must rely on their own
                        examination of our Company and the terms of the Offer,
                        including the merits and risks involved.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the <b>“U.S. Securities Act”</b>), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the Equity Shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The information in the Red Herring Prospectus is as of
                        the date thereof and none of the Company, the Book
                        Running Lead Managers or their respective affiliates,
                        directors, officers, agents, representatives, advisers
                        or employees are under any obligation to update or
                        revise the Red Herring Prospectus to reflect
                        circumstances arising after the date thereof.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids (as defined in the Red Herring
                        Prospectus) may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        Any person into whose possession the Red Herring
                        Prospectus comes is required to inform himself or
                        herself about and to observe any such restrictions.
                        Potential investors should not rely on the draft red
                        herring prospectus dated November 10, 2025 filed by the
                        Company for any investment decision.
                        <br />
                        <br />
                        Invitations to subscribe to or purchase the Equity
                        Shares in the Offer should only be made pursuant to the
                        Red Herring Prospectus if the recipient is in India or
                        the preliminary offering memorandum for the Offer, which
                        comprises the red herring prospectus and the preliminary
                        international wrap for the Offer, if the recipient is
                        outside India. No person outside India is eligible to
                        Bid for Equity Shares in the Offer unless that person
                        has received the preliminary offering memorandum for the
                        Offer, which shall contain the selling restrictions for
                        the Offer outside India.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        Equity Shares involves a high degree of risk and for
                        details relating to such risk, please see the section
                        titled “Risk Factors” of the Red Herring Prospectus.
                        <br />
                        <br />
                        Neither the Company, nor any of its affiliates,
                        directors, agents, officers, representatives, advisers
                        or employees do not accept any liability whatsoever,
                        direct or indirect, and will be not be responsible or
                        have any responsibility of any kind for any loss or
                        damage that could result from interception and
                        interpretation by any third parties of any information
                        being made available to you through this website. The
                        Company and its affiliates cannot and do not guarantee
                        the accuracy, timeliness or completeness of the
                        information being made available to you in the Red
                        Herring Prospectus beyond the date of the Red Herring
                        Prospectus. The information contained in the Red Herring
                        Prospectus may not be updated since its original
                        publication date and may not reflect the latest updates.
                        The Company and its affiliates will not be responsible
                        for any loss to any person or entity caused by any
                        shortcoming, defect or inaccuracy which may have
                        inadvertently or otherwise crept into the website.
                        Neither the Company, nor any of its affiliates nor their
                        directors, officers and employees will be liable or have
                        any responsibility of any kind for any loss or damage
                        that you incur in the event of any failure or disruption
                        of this website, or resulting from the act or omission
                        of any other party involved in making this website or
                        the data contained therein available to you, or from any
                        other cause relating to your access to, inability to
                        access, or use of the website or these materials.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via our website does not constitute
                        a part of the Red Herring Prospectus.
                        <br />
                        <br />
                        If you are not permitted to view the materials on this
                        website or are in any doubt as to whether you are
                        permitted to view these materials, please exit this
                        webpage.
                        <br />
                        <br />
                        To access this information, you must confirm by pressing
                        on the button marked "I Confirm" that, at the time of
                        access you are located and resident in India. If you
                        cannot make this confirmation, you must press the button
                        marked "I Do Not Confirm".
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to subscribe or buy or sell securities of
                        the Company in the United States or in any other
                        jurisdiction, including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelSecond}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={() => handleConfirmSecond(items.url)}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : items.title === 'RHP Audio-Visual (English)' ? (
                    <Dialog
                      open={openThird}
                      onClose={handleCancelThird}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR
                          TRANSMISSION IN, INTO OR TO, DIRECTLY OR INDIRECTLY,
                          THE UNITED STATES OF AMERICA (INCLUDING ITS
                          TERRITORIES AND POSSESSIONS), ANY STATE OF THE UNITED
                          STATES AND THE DISTRICT OF COLUMBIA (THE “UNITED
                          STATES”) OR ANY OTHER JURISDICTION WHERE IT IS
                          UNLAWFUL TO DO SO.
                          <br />
                          <br />
                          THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                          ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                        </b>
                        <br />
                        <br />
                        <b>IMPORTANT:</b>  You must read and agree with the
                        terms and conditions of the following disclaimer before
                        continuing.
                        <br />
                        <br />
                        The following disclaimer applies to the audio visual
                        film of SEDEMAC Mechatronics Limited (the “
                        <b>Company</b>”) dated February 25, 2026 (the “
                        <b>Red Herring Prospectus</b>”) filed with the Registrar
                        of Companies, Maharashtra at Pune (“<b>RoC</b>”), and
                        thereafter with Securities and Exchange Board of India
                        (“<b>SEBI</b>”), BSE Limited and the National Stock
                        Exchange of India Limited and hosted on this website in
                        connection with the initial public offering of the
                        equity shares of face value of ₹ 10 each (“
                        <b>Equity Shares</b>”) of the Company (the{' '}
                        <b>“Offer”</b>).The RHP is/shall be available on the
                        website of SEBI at www.sebi.gov.in, as well as on the
                        websites of the Stock Exchanges, i.e., BSE and NSE at
                        www.bseindia.com and www.nseindia.com, respectively, on
                        the website of the Company, and on the websites Book
                        Running Lead Managers.
                        <br />
                        <br />
                        <b>
                          THE RED HERRING PROSPECTUS IS MADE AVAILABLE ON THIS
                          WEBSITE IN ELECTRONIC FORM SOLELY TO COMPLY WITH THE
                          SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE OF
                          CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS,
                          2018, AS AMENDED (“SEBI ICDR REGULATIONS”). THE IPO AV
                          IS BEING MADE AVAILABLE ON THIS WEBSITE IN ACCORDANCE
                          WITH THE MASTER CIRCULAR ON “ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS” DATED NOVEMBER 11, 2024,
                          ISSUED BY THE SECURITIES AND EXCHANGE BOARD OF INDIA. 
                        </b>
                        You are advised to read this disclaimer carefully before
                        reading, accessing or making any other use of the IPO
                        AV. In accessing the IPO AV, you agree to be bound by
                        the following terms and conditions, including any
                        modifications to them from time to time. The IPO AV is
                        directed at, and is intended for distribution to, and
                        use by, residents of India only. The information in the
                        IPO AV, is not intended for, and may not be accessed in
                        or by, or distributed or transmitted in, into or to,
                        directly or indirectly, the United States of America
                        (including its territories and possessions), any state
                        of the United States or any other jurisdiction where it
                        is unlawful to do so. No part of the contents of the IPO
                        AV shall be copied or duplicated in any form by any
                        means or redistributed.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the “<b>U.S. Securities Act</b>”), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the equity shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        The Company, and the Book Running Lead Managers and
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers and employees do not
                        accept any liability whatsoever, direct or indirect,
                        that may arise from the use of the information contained
                        on this website. The information in the IPO AV is as of
                        the date thereof and neither the Company, the Promoters,
                        Selling Shareholders, the Book Running Lead Managers nor
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers or employees are under
                        any obligation to update or revise the IPO AV to reflect
                        circumstances arising after the date thereof. You are
                        reminded that documents transmitted in electronic form
                        may be altered or changed during the process of
                        transmission and consequently, neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor any of their respective affiliates,
                        directors, officers, agents, representatives, advisers
                        or employees accepts any liability or responsibility
                        whatsoever in respect of alterations or changes which
                        have taken place during the course of transmission of
                        the IPO AV in electronic format.
                        <br />
                        <br />
                        Investors are advised not to rely on any other document,
                        content or information provided in respect to the Offer
                        on the internet/ online websites/ social media
                        platforms/ micro-blogging platforms and by
                        influencers/finfluencers since the same is not
                        authorized/ approved/ commissioned/ paid by the Company
                        or its Promoters/Directors/KMPs or SMPs in any manner.
                        Any such posts, including on social media platforms, may
                        be illegal in certain jurisdictions and only certain
                        categories of persons may be authorized to access such
                        information. Such posts, including on social media
                        platforms, do not constitute an offer or solicitation of
                        an offer, or any advice or recommendation to purchase,
                        sell or transact in any of the Company’s securities.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled
                        “Risk Factors” of the Red Herring Prospectus. Potential
                        investors should not rely on the DRHP filed with the
                        SEBI. The IPO AV provides only the salient features of
                        the Offer and accordingly, potential investors should
                        not rely on the IPO AV. Any decision on whether to
                        invest in the Equity Shares must be made solely on the
                        basis of the Red Herring Prospectus.
                        <br />
                        <br />
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        will be liable or have any responsibility of any kind
                        for any loss or damage that you incur in the event of
                        any failure or disruption of this website, or resulting
                        from the act or omission of any other party involved in
                        making this website or the data contained therein
                        available to you, or from any other cause relating to
                        your access to, inability to access, or use of this
                        website or the IPO AV.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via this website does not
                        constitute a part of the IPO AV.
                        <br />
                        <br />
                        <b>
                          IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                          WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                          PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                          WEBPAGE.
                        </b>
                        <br />
                        <br />
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelThird}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirmThird}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : items.title === 'RHP Audio-Visual (Hindi)' ? (
                    <Dialog
                      open={openFourth}
                      onClose={handleCancelFourth}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR
                          TRANSMISSION IN, INTO OR TO, DIRECTLY OR INDIRECTLY,
                          THE UNITED STATES OF AMERICA (INCLUDING ITS
                          TERRITORIES AND POSSESSIONS), ANY STATE OF THE UNITED
                          STATES AND THE DISTRICT OF COLUMBIA (THE “UNITED
                          STATES”) OR ANY OTHER JURISDICTION WHERE IT IS
                          UNLAWFUL TO DO SO.
                          <br />
                          <br />
                          THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                          ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                        </b>
                        <br />
                        <br />
                        <b>IMPORTANT:</b>  You must read and agree with the
                        terms and conditions of the following disclaimer before
                        continuing.
                        <br />
                        <br />
                        The following disclaimer applies to the audio visual
                        film of SEDEMAC Mechatronics Limited (the “
                        <b>Company</b>”) dated February 25, 2026 (the “
                        <b>Red Herring Prospectus</b>”) filed with the Registrar
                        of Companies, Maharashtra at Pune (“<b>RoC</b>”), and
                        thereafter with Securities and Exchange Board of India
                        (“<b>SEBI</b>”), BSE Limited and the National Stock
                        Exchange of India Limited and hosted on this website in
                        connection with the initial public offering of the
                        equity shares of face value of ₹ 10 each (“
                        <b>Equity Shares</b>”) of the Company (the{' '}
                        <b>“Offer”</b>).The RHP is/shall be available on the
                        website of SEBI at www.sebi.gov.in, as well as on the
                        websites of the Stock Exchanges, i.e., BSE and NSE at
                        www.bseindia.com and www.nseindia.com, respectively, on
                        the website of the Company, and on the websites Book
                        Running Lead Managers.
                        <br />
                        <br />
                        <b>
                          THE RED HERRING PROSPECTUS IS MADE AVAILABLE ON THIS
                          WEBSITE IN ELECTRONIC FORM SOLELY TO COMPLY WITH THE
                          SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE OF
                          CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS,
                          2018, AS AMENDED (“SEBI ICDR REGULATIONS”). THE IPO AV
                          IS BEING MADE AVAILABLE ON THIS WEBSITE IN ACCORDANCE
                          WITH THE MASTER CIRCULAR ON “ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS” DATED NOVEMBER 11, 2024,
                          ISSUED BY THE SECURITIES AND EXCHANGE BOARD OF INDIA. 
                        </b>
                        You are advised to read this disclaimer carefully before
                        reading, accessing or making any other use of the IPO
                        AV. In accessing the IPO AV, you agree to be bound by
                        the following terms and conditions, including any
                        modifications to them from time to time. The IPO AV is
                        directed at, and is intended for distribution to, and
                        use by, residents of India only. The information in the
                        IPO AV, is not intended for, and may not be accessed in
                        or by, or distributed or transmitted in, into or to,
                        directly or indirectly, the United States of America
                        (including its territories and possessions), any state
                        of the United States or any other jurisdiction where it
                        is unlawful to do so. No part of the contents of the IPO
                        AV shall be copied or duplicated in any form by any
                        means or redistributed.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the “<b>U.S. Securities Act</b>”), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the equity shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        The Company, and the Book Running Lead Managers and
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers and employees do not
                        accept any liability whatsoever, direct or indirect,
                        that may arise from the use of the information contained
                        on this website. The information in the IPO AV is as of
                        the date thereof and neither the Company, the Promoters,
                        Selling Shareholders, the Book Running Lead Managers nor
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers or employees are under
                        any obligation to update or revise the IPO AV to reflect
                        circumstances arising after the date thereof. You are
                        reminded that documents transmitted in electronic form
                        may be altered or changed during the process of
                        transmission and consequently, neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor any of their respective affiliates,
                        directors, officers, agents, representatives, advisers
                        or employees accepts any liability or responsibility
                        whatsoever in respect of alterations or changes which
                        have taken place during the course of transmission of
                        the IPO AV in electronic format.
                        <br />
                        <br />
                        Investors are advised not to rely on any other document,
                        content or information provided in respect to the Offer
                        on the internet/ online websites/ social media
                        platforms/ micro-blogging platforms and by
                        influencers/finfluencers since the same is not
                        authorized/ approved/ commissioned/ paid by the Company
                        or its Promoters/Directors/KMPs or SMPs in any manner.
                        Any such posts, including on social media platforms, may
                        be illegal in certain jurisdictions and only certain
                        categories of persons may be authorized to access such
                        information. Such posts, including on social media
                        platforms, do not constitute an offer or solicitation of
                        an offer, or any advice or recommendation to purchase,
                        sell or transact in any of the Company’s securities.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled
                        “Risk Factors” of the Red Herring Prospectus. Potential
                        investors should not rely on the DRHP filed with the
                        SEBI. The IPO AV provides only the salient features of
                        the Offer and accordingly, potential investors should
                        not rely on the IPO AV. Any decision on whether to
                        invest in the Equity Shares must be made solely on the
                        basis of the Red Herring Prospectus.
                        <br />
                        <br />
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        will be liable or have any responsibility of any kind
                        for any loss or damage that you incur in the event of
                        any failure or disruption of this website, or resulting
                        from the act or omission of any other party involved in
                        making this website or the data contained therein
                        available to you, or from any other cause relating to
                        your access to, inability to access, or use of this
                        website or the IPO AV.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via this website does not
                        constitute a part of the IPO AV.
                        <br />
                        <br />
                        <b>
                          IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                          WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                          PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                          WEBPAGE.
                        </b>
                        <br />
                        <br />
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelFourth}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirmFourth}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : items.title === 'Draft Red Herring Prospectus' ? (
                    <Dialog
                      open={openFifth}
                      onClose={handleCancelFifth}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          PLEASE READ THIS NOTICE CAREFULLY. IT APPLIES TO ALL
                          PERSONS WHO VIEW THIS WEBSITE. THESE MATERIALS ARE NOT
                          DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS
                          LOCATED OUTSIDE INDIA. THESE MATERIALS ARE BEING MADE
                          AVAILABLE ON THIS WEBSITE TO COMPLY WITH SECURITIES
                          AND EXCHANGE BOARD OF INDIA (ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS) REGULATIONS, 2018, AS
                          AMENDED.
                        </b>
                        <br />
                        <br />{' '}
                        <b>
                          IMPORTANT: You must read and agree with the terms and
                          conditions of the following disclaimer
                          <br /> before
                          <br /> continuing.
                        </b>
                        <br /> <br /> The following disclaimer applies to the
                        draft red herring prospectus of SEDEMAC Mechatronics
                        Limited (the <b>“Company”</b>) dated November 10, 2025
                        (the
                        <b> “Draft Red Herring Prospectus”</b>) filed with the
                        Securities and Exchange Board of India (<b>“SEBI”</b>),
                        BSE Limited and the National Stock Exchange of India
                        Limited and hosted on this website in connection with
                        the initial public offering of the equity shares of face
                        value of ₹ 10 each (<b>“Equity Shares”</b>) of the
                        Company (the <b>“Offer”</b>). You are advised to read
                        the following notice carefully before reading, accessing
                        or making any other use of the Draft Red Herring
                        Prospectus. By accessing the Draft Red Herring
                        Prospectus, you agree to be bound by the following terms
                        and conditions, including any modifications to them from
                        time to time.
                        <br />
                        <br />
                        Access to the Draft Red Herring Prospectus does not
                        constitute a recommendation by the Company, ICICI
                        Securities Limited, Avendus Capital Private Limited and
                        Axis Capital Limited (collectively, the
                        <b>“Book Running Lead Managers”</b>), the members of the
                        Syndicate (as defined in the Draft Red Herring
                        Prospectus) or any of their respective affiliates or any
                        other person to subscribe to the Equity Shares offered
                        in the Offer.
                        <br />
                        <br /> The Draft Red Herring Prospectus is directed at,
                        and is intended for distribution to, and use by,
                        residents of India only. The information in this portion
                        of our website, including the Draft Red Herring
                        Prospectus, is not intended for, and may not be accessed
                        in or by, or is not for publication or distribution,
                        directly or indirectly, in or into the United States.
                        The contents of the Draft Red Herring Prospectus is for
                        your information only, and you acknowledge that access
                        to the Draft Red Herring Prospectus is intended for use
                        by you only and you agree not to forward the Draft Red
                        Herring Prospectus on to any other person, internal or
                        external to your company, in whole or in part, or
                        otherwise provide access via e-mail or otherwise to any
                        person. No part of the contents of the Draft Red Herring
                        Prospectus shall be copied or duplicated in any form by
                        any means or redistributed.
                        <br />
                        <br />
                        The Draft Red Herring Prospectus has been hosted on this
                        website as prescribed under Regulation 26(1) of the
                        Securities and Exchange Board of India (Issue of Capital
                        and Disclosure Requirements) Regulations, 2018, as
                        amended (the <b>“SEBI ICDR Regulations”</b>). Our
                        Company has taken all necessary steps to ensure that the
                        contents of the Draft Red Herring Prospectus as
                        appearing on this website are identical to the Draft Red
                        Herring Prospectus filed with the SEBI. You are reminded
                        that documents transmitted in electronic form may be
                        altered or changed during the process of transmission
                        and consequently, neither the Company, nor any of its
                        affiliates, directors, agents, officers,
                        representatives, advisers or employees accepts any
                        liability or responsibility whatsoever in respect of
                        alterations or changes which have taken place during the
                        course of transmission of electronic data.
                        <br />
                        <br />
                        The Equity Shares have not been recommended by any U.S.
                        federal or state securities commission or regulatory
                        authority. Furthermore, the foregoing authorities have
                        not confirmed the accuracy or determined the adequacy of
                        the Draft Red Herring Prospectus or approved or
                        disapproved the Equity Shares. Any representation to the
                        contrary is a criminal offence in the United States. In
                        making an investment decision investors must rely on
                        their own examination of our Company and the terms of
                        the Offer, including the merits and risks involved.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the <b>“U.S. Securities Act”</b>), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the Equity Shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The Equity Shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        Any person into whose possession the Draft Red Herring
                        Prospectus comes is required to inform himself or
                        herself about and to observe any such restrictions.
                        Neither the Company, nor any of its affiliates is
                        soliciting any action based on the Draft Red Herring
                        Prospectus, and it should not be construed as an offer
                        to sell or the solicitation of an offer to buy any
                        securities. Potential investors should not rely on the
                        Draft Red Herring Prospectus for any investment
                        decision.
                        <br />
                        <br />
                        Any decision on whether to invest in the Equity Shares
                        described in the Draft Red Herring Prospectus may only
                        be made after a red herring prospectus has been filed
                        with the Registrar of Companies, Maharashtra at Pune and
                        the SEBI and the stock exchanges, and must be made
                        solely on the basis of such red herring prospectus, as
                        there may be material changes in the red herring
                        prospectus compared to the Draft Red Herring Prospectus.
                        Nothing in the Draft Red Herring Prospectus constitutes
                        an offer or an invitation by or on behalf of the Company
                        to subscribe for or purchase any of the securities
                        described therein, invitations to subscribe to or
                        purchase the Equity Shares in the Offer will be made
                        only pursuant to the red herring prospectus if the
                        recipient is in India or the preliminary offering
                        memorandum for the Offer, which comprises the red
                        herring prospectus and the preliminary international
                        wrap for the Offer, if the recipient is outside India.
                        No person outside India is eligible to Bid for Equity
                        Shares in the Offer unless that person has received the
                        preliminary offering memorandum for the Offer, which
                        shall contain the selling restrictions for the Offer
                        outside India.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        Equity Shares involves a high degree of risk and for
                        details relating to such risk, please see the section
                        titled “Risk Factors” of the red herring prospectus
                        which will be filed with the Registrar of Companies, and
                        SEBI in the future. The Offer and sale of the Equity
                        Shares to be offered in the Offer shall be made only
                        pursuant to the red herring prospectus, when available.
                        As there may be material changes in the red herring
                        prospectus versus the Draft Red Herring Prospectus,
                        potential investors should not rely on the Draft Red
                        Herring Prospectus filed with SEBI and the Stock
                        Exchanges.
                        <br />
                        <br />
                        Neither the Company, nor any of its affiliates,
                        directors, agents, officers, representatives, advisers
                        or employees do not accept any liability whatsoever,
                        direct or indirect, and will be not be responsible or
                        have any responsibility of any kind for any loss or
                        damage that could result from interception and
                        interpretation by any third parties of any information
                        being made available to you through this website. The
                        Company and its affiliates cannot and do not guarantee
                        the accuracy, timeliness or completeness of the
                        information being made available to you in the Draft Red
                        Herring Prospectus beyond the date of the Draft Red
                        Herring Prospectus. The information contained in the
                        Draft Red Herring Prospectus may not be updated since
                        its original publication date and may not reflect the
                        latest updates. The Company and its affiliates will not
                        be responsible for any loss to any person or entity
                        caused by any shortcoming, defect or inaccuracy which
                        may have inadvertently or otherwise crept into the
                        website. Neither the Company, nor any of its affiliates
                        nor their directors, officers and employees will be
                        liable or have any responsibility of any kind for any
                        loss or damage that you incur in the event of any
                        failure or disruption of this website, or resulting from
                        the act or omission of any other party involved in
                        making this website or the data contained therein
                        available to you, or from any other cause relating to
                        your access to, inability to access, or use of the
                        website or these materials.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via our website does not constitute
                        a part of the Draft Red Herring Prospectus.
                        <br />
                        <br />
                        If you are not permitted to view the materials on this
                        website or are in any doubt as to whether you are
                        permitted to view these materials, please exit this
                        webpage.
                        <br />
                        <br />
                        To access this information, you must confirm by pressing
                        on the button marked "I Confirm" that, at the time of
                        access you are located and resident in India. If you
                        cannot make this confirmation, you must press the button
                        marked "I Do Not Confirm".
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to subscribe or buy or sell securities of
                        the Company in the United States or in any other
                        jurisdiction, including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelFifth}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirmFifth}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : items.title === 'DRHP Audio-Visual (English)' ? (
                    <Dialog
                      open={openSixth}
                      onClose={handleCancelSixth}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR
                          TRANSMISSION IN, INTO OR TO, DIRECTLY OR INDIRECTLY,
                          THE UNITED STATES OF AMERICA (INCLUDING ITS
                          TERRITORIES AND POSSESSIONS), ANY STATE OF THE UNITED
                          STATES AND THE DISTRICT OF COLUMBIA (THE “UNITED
                          STATES”) OR ANY OTHER JURISDICTION WHERE IT IS
                          UNLAWFUL TO DO SO.
                          <br />
                          <br />
                          THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                          ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                        </b>
                        <br />
                        <br />
                        <b>IMPORTANT:</b>  You must read and agree with the
                        terms and conditions of the following disclaimer before
                        continuing.
                        <br />
                        <br />
                        The following disclaimer applies to the audio visual
                        film of SEDEMAC Mechatronics Limited (the “
                        <b>Company</b>”) dated November 10, 2025 (the “
                        <b>Draft Red Herring Prospectus</b>”) (“<b>Offer</b>”).
                        The Company is proposing, subject to receipt of
                        requisite approvals, market conditions and other
                        considerations, to make an initial public offering of
                        its Equity Shares and has filed the DRHP with the
                        Securities and Exchange Board of India (“<b>SEBI</b>”),
                        BSE Limited and National Stock Exchange of India Limited
                        (“<b>Stock Exchanges</b>”). The DRHP is available on the
                        website of SEBI at www.sebi.gov.in, as well as on the
                        websites of the Stock Exchanges, i.e., BSE and NSE at
                        www.bseindia.com and www.nseindia.com, respectively, on
                        the website of the Company, and on the websites Book
                        Running Lead Managers.
                        <br />
                        <br />
                        <b>
                          THE DRAFT RED HERRING PROSPECTUS IS MADE AVAILABLE ON
                          THIS WEBSITE IN ELECTRONIC FORM SOLELY TO COMPLY WITH
                          THE SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE OF
                          CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS,
                          2018, AS AMENDED (“SEBI ICDR REGULATIONS”). THE IPO AV
                          IS BEING MADE AVAILABLE ON THIS WEBSITE IN ACCORDANCE
                          WITH THE MASTER CIRCULAR ON “ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS” DATED NOVEMBER 11, 2024,
                          ISSUED BY THE SECURITIES AND EXCHANGE BOARD OF INDIA. 
                        </b>
                        You are advised to read this disclaimer carefully before
                        reading, accessing or making any other use of the IPO
                        AV. In accessing the IPO AV, you agree to be bound by
                        the following terms and conditions, including any
                        modifications to them from time to time. The IPO AV is
                        directed at, and is intended for distribution to, and
                        use by, residents of India only. The information in the
                        IPO AV, is not intended for, and may not be accessed in
                        or by, or distributed or transmitted in, into or to,
                        directly or indirectly, the United States of America
                        (including its territories and possessions), any state
                        of the United States or any other jurisdiction where it
                        is unlawful to do so. No part of the contents of the IPO
                        AV shall be copied or duplicated in any form by any
                        means or redistributed.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the “<b>U.S. Securities Act</b>”), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the equity shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        The Company, and the Book Running Lead Managers and
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers and employees do not
                        accept any liability whatsoever, direct or indirect,
                        that may arise from the use of the information contained
                        on this website. The information in the IPO AV is as of
                        the date thereof and neither the Company, the Promoters,
                        Selling Shareholders, the Book Running Lead Managers nor
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers or employees are under
                        any obligation to update or revise the IPO AV to reflect
                        circumstances arising after the date thereof. You are
                        reminded that documents transmitted in electronic form
                        may be altered or changed during the process of
                        transmission and consequently, neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor any of their respective affiliates,
                        directors, officers, agents, representatives, advisers
                        or employees accepts any liability or responsibility
                        whatsoever in respect of alterations or changes which
                        have taken place during the course of transmission of
                        the IPO AV in electronic format.
                        <br />
                        <br />
                        Investors are advised not to rely on any other document,
                        content or information provided in respect to the Offer
                        on the internet/ online websites/ social media
                        platforms/ micro-blogging platforms and by
                        influencers/finfluencers since the same is not
                        authorized/ approved/ commissioned/ paid by the Company
                        or its Promoters/Directors/KMPs or SMPs in any manner.
                        Any such posts, including on social media platforms, may
                        be illegal in certain jurisdictions and only certain
                        categories of persons may be authorized to access such
                        information. Such posts, including on social media
                        platforms, do not constitute an offer or solicitation of
                        an offer, or any advice or recommendation to purchase,
                        sell or transact in any of the Company’s securities.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled
                        “Risk Factors” of the Red Herring Prospectus when
                        available. Potential investors should also refer to the
                        Red Herring Prospectus and the Prospectus which will be
                        filed relevant Registrar of Companies (“<b>RoC</b>”) and
                        SEBI in the future, including the section titled “Risk
                        Factors”. Potential investors should not rely on the
                        DRHP filed with the SEBI. The IPO AV provides only the
                        salient features of the Offer and accordingly, potential
                        investors should not rely on the IPO AV. Any decision on
                        whether to invest in the Equity Shares must be made
                        solely on the basis of the Red Herring Prospectus when
                        available.
                        <br />
                        <br />
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        will be liable or have any responsibility of any kind
                        for any loss or damage that you incur in the event of
                        any failure or disruption of this website, or resulting
                        from the act or omission of any other party involved in
                        making this website or the data contained therein
                        available to you, or from any other cause relating to
                        your access to, inability to access, or use of this
                        website or the IPO AV.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via this website does not
                        constitute a part of the IPO AV.
                        <br />
                        <br />
                        <b>
                          IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                          WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                          PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                          WEBPAGE.
                        </b>
                        <br />
                        <br />
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelSixth}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirmSixth}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : items.title === 'DRHP Audio-Visual (Hindi)' ? (
                    <Dialog
                      open={openSeven}
                      onClose={handleCancelSeven}
                      maxWidth="md"
                      fullWidth
                    >
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                          textAlign: 'center',
                        }}
                      >
                        Disclaimer - Important
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 700,
                          color: '#A03811',
                          fontSize: '20px',
                        }}
                      >
                        Disclaimer
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: 1.6,
                        }}
                      >
                        <b>
                          NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR
                          TRANSMISSION IN, INTO OR TO, DIRECTLY OR INDIRECTLY,
                          THE UNITED STATES OF AMERICA (INCLUDING ITS
                          TERRITORIES AND POSSESSIONS), ANY STATE OF THE UNITED
                          STATES AND THE DISTRICT OF COLUMBIA (THE “UNITED
                          STATES”) OR ANY OTHER JURISDICTION WHERE IT IS
                          UNLAWFUL TO DO SO.
                          <br />
                          <br />
                          THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                          ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                        </b>
                        <br />
                        <br />
                        <b>IMPORTANT:</b>  You must read and agree with the
                        terms and conditions of the following disclaimer before
                        continuing.
                        <br />
                        <br />
                        The following disclaimer applies to the audio visual
                        film of SEDEMAC Mechatronics Limited (the “
                        <b>Company</b>”) dated November 10, 2025 (the “
                        <b>Draft Red Herring Prospectus</b>”) (“<b>Offer</b>”).
                        The Company is proposing, subject to receipt of
                        requisite approvals, market conditions and other
                        considerations, to make an initial public offering of
                        its Equity Shares and has filed the DRHP with the
                        Securities and Exchange Board of India (“<b>SEBI</b>”),
                        BSE Limited and National Stock Exchange of India Limited
                        (“<b>Stock Exchanges</b>”). The DRHP is available on the
                        website of SEBI at www.sebi.gov.in, as well as on the
                        websites of the Stock Exchanges, i.e., BSE and NSE at
                        www.bseindia.com and www.nseindia.com, respectively, on
                        the website of the Company, and on the websites Book
                        Running Lead Managers.
                        <br />
                        <br />
                        <b>
                          THE DRAFT RED HERRING PROSPECTUS IS MADE AVAILABLE ON
                          THIS WEBSITE IN ELECTRONIC FORM SOLELY TO COMPLY WITH
                          THE SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE OF
                          CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS,
                          2018, AS AMENDED (“SEBI ICDR REGULATIONS”). THE IPO AV
                          IS BEING MADE AVAILABLE ON THIS WEBSITE IN ACCORDANCE
                          WITH THE MASTER CIRCULAR ON “ISSUE OF CAPITAL AND
                          DISCLOSURE REQUIREMENTS” DATED NOVEMBER 11, 2024,
                          ISSUED BY THE SECURITIES AND EXCHANGE BOARD OF INDIA. 
                        </b>
                        You are advised to read this disclaimer carefully before
                        reading, accessing or making any other use of the IPO
                        AV. In accessing the IPO AV, you agree to be bound by
                        the following terms and conditions, including any
                        modifications to them from time to time. The IPO AV is
                        directed at, and is intended for distribution to, and
                        use by, residents of India only. The information in the
                        IPO AV, is not intended for, and may not be accessed in
                        or by, or distributed or transmitted in, into or to,
                        directly or indirectly, the United States of America
                        (including its territories and possessions), any state
                        of the United States or any other jurisdiction where it
                        is unlawful to do so. No part of the contents of the IPO
                        AV shall be copied or duplicated in any form by any
                        means or redistributed.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered under the U.S. Securities Act of 1933, as
                        amended (the “<b>U.S. Securities Act</b>”), and may not
                        be offered or sold within the United States, except
                        pursuant to an exemption from, or in a transaction not
                        subject to, the registration requirements of the U.S.
                        Securities Act and applicable U.S. state securities
                        laws. Accordingly, the equity shares are only being
                        offered and sold outside the United States in “offshore
                        transactions”, as defined in, and in reliance on
                        Regulation S under the U.S. Securities Act and the
                        applicable laws of the jurisdiction where those offers
                        and sales are made.
                        <br />
                        <br />
                        The equity shares have not been and will not be
                        registered, listed or otherwise qualified in any other
                        jurisdiction outside India and may not be offered or
                        sold, and Bids may not be made by persons in any such
                        jurisdiction, except in compliance with the applicable
                        laws of such jurisdiction.
                        <br />
                        <br />
                        The Company, and the Book Running Lead Managers and
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers and employees do not
                        accept any liability whatsoever, direct or indirect,
                        that may arise from the use of the information contained
                        on this website. The information in the IPO AV is as of
                        the date thereof and neither the Company, the Promoters,
                        Selling Shareholders, the Book Running Lead Managers nor
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers or employees are under
                        any obligation to update or revise the IPO AV to reflect
                        circumstances arising after the date thereof. You are
                        reminded that documents transmitted in electronic form
                        may be altered or changed during the process of
                        transmission and consequently, neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor any of their respective affiliates,
                        directors, officers, agents, representatives, advisers
                        or employees accepts any liability or responsibility
                        whatsoever in respect of alterations or changes which
                        have taken place during the course of transmission of
                        the IPO AV in electronic format.
                        <br />
                        <br />
                        Investors are advised not to rely on any other document,
                        content or information provided in respect to the Offer
                        on the internet/ online websites/ social media
                        platforms/ micro-blogging platforms and by
                        influencers/finfluencers since the same is not
                        authorized/ approved/ commissioned/ paid by the Company
                        or its Promoters/Directors/KMPs or SMPs in any manner.
                        Any such posts, including on social media platforms, may
                        be illegal in certain jurisdictions and only certain
                        categories of persons may be authorized to access such
                        information. Such posts, including on social media
                        platforms, do not constitute an offer or solicitation of
                        an offer, or any advice or recommendation to purchase,
                        sell or transact in any of the Company’s securities.
                        <br />
                        <br />
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled
                        “Risk Factors” of the Red Herring Prospectus when
                        available. Potential investors should also refer to the
                        Red Herring Prospectus and the Prospectus which will be
                        filed relevant Registrar of Companies (“<b>RoC</b>”) and
                        SEBI in the future, including the section titled “Risk
                        Factors”. Potential investors should not rely on the
                        DRHP filed with the SEBI. The IPO AV provides only the
                        salient features of the Offer and accordingly, potential
                        investors should not rely on the IPO AV. Any decision on
                        whether to invest in the Equity Shares must be made
                        solely on the basis of the Red Herring Prospectus when
                        available.
                        <br />
                        <br />
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, Selling Shareholders, the Book Running Lead
                        Managers nor their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        will be liable or have any responsibility of any kind
                        for any loss or damage that you incur in the event of
                        any failure or disruption of this website, or resulting
                        from the act or omission of any other party involved in
                        making this website or the data contained therein
                        available to you, or from any other cause relating to
                        your access to, inability to access, or use of this
                        website or the IPO AV.
                        <br />
                        <br />
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via this website does not
                        constitute a part of the IPO AV.
                        <br />
                        <br />
                        <b>
                          IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                          WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                          PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                          WEBPAGE.
                        </b>
                        <br />
                        <br />
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                        <br />
                        <br />
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </DialogContent>

                      <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                        <Button
                          onClick={handleCancelSeven}
                          variant="outlined"
                          color="error"
                        >
                          I Do Not Confirm
                        </Button>

                        <Button
                          onClick={handleConfirmSeven}
                          variant="contained"
                          sx={{
                            bgcolor: '#A03811',
                            '&:hover': { bgcolor: '#802c0e' },
                          }}
                        >
                          I Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : null}
                </React.Fragment>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default DRHP;
