import {
  Box,
  Container,
} from '@mui/material';
import { Main } from 'layouts';
import React, { useEffect, useState, useCallback } from 'react';
import { scrollToElement } from 'common/styles';
import Typography from '@mui/material/Typography';
import {
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
} from '@mui/material';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';


const sections = [
  {
    title: 'Prospectus',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/drhp',
  },
  {
    title: 'Industry Report',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/industry-reports',
  },

  {
    title: 'Certificates',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/Certificates',
  },
  {
    title: 'Material Contracts And Documents',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/material-contracts',
  },
  {
    title: 'Miscellaneous',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link: '/investors/other-information/ipo-offer-documents/miscellaneous',
  },
];

const IPOOffersDocuments = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
    <Main>
      <Container>
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
                // ml={{ xs: 5, md: 0 }}
                mt={{ xs: 2, md: 0 }}
                sx={{
                  fontWeight: 700,
                  mb: { xs: 3, md: 7 },
                  fontSize: { xs: '28px', md: '36px' },
                }}
              >
                IPO Offer Documents
              </Typography>
              <Grid
                container
                spacing={6}
                justifyContent="flex-start" // centers items horizontally
                alignItems="center"
              >
                {sections.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12} // 1 per row mobile
                    sm={4} // 3 per row tablet
                    md={3} // 4 per row laptop
                    lg={2.4} // 5 per row desktop (12 / 2.4 = 5)
                    display="flex"
                    justifyContent="center" // ensures card is centered inside
                  >
                    <Card
                      onClick={() =>
                        // item.title === 'Material Contracts And Documents'
                        //   ? handleOpenModal(item.link)
                        // :
                        navigate(item.link)
                      }
                      sx={{
                        width: '100%',
                        height: 200,
                        borderRadius: 4,
                        cursor: 'pointer',
                        overflow: 'hidden',
                        backgroundColor: '#ffe3ccff',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                        transition:
                          'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                            fontSize: {
                              xs: '0.85rem',
                              sm: '0.9rem',
                              md: '1rem',
                            },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Card>
                    {/* <Dialog
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
                        MATERIAL CONTRACTS AND DOCUMENTS FOR INSPECTION
                      </DialogTitle>
                      <Divider />
                      <DialogTitle
                        sx={{
                          fontWeight: 100,
                          color: '#A03811',
                          fontSize: '14px',
                        }}
                      >
                        
                      </DialogTitle>
                      <DialogContent
                        // dividers
                        sx={{
                          maxHeight: '60vh',
                          overflowY: 'auto',
                          whiteSpace: 'pre-line',
                          fontSize: '16px',
                          lineHeight: 1.6,
                        }}
                      >
                        <i>
                          Note: Capitalised terms not defined herein shall have
                          the meaning ascribed to them in the Red Herring
                          Prospectus and available at the following web-link:
                          https://www.sedemac.com/investors/other-information/ipo-offer-documents/material-contracts.
                        </i>
                        <br />
                        <br />
                        The copies of the documents and contracts which have
                        been entered or are to be entered into by SEDEMAC
                        Mechatronics Limited (the <b>“Company”</b>) (not being
                        contracts entered into in the ordinary course of
                        business carried on by the Company includes contracts
                        entered into until the date of the red herring
                        prospectus dated February 25, 2026 (
                        <b>“Red Herring Prospectus”</b>) which are or may be
                        deemed material, as specified in the Red Herring
                        Prospectus filed by the Company with the Registrar of
                        Companies, Maharashtra at Pune (
                        <b>“Material Contracts and Documents”</b>) may be
                        inspected at the Company’s Registered and Corporate
                        Office between 10 a.m. and 5 p.m. IST on all Working
                        Days from the date of the Red Herring Prospectus until
                        the Bid/Offer Closing Date (except for such agreements
                        executed after the Bid/Offer Closing Date). Any of the
                        contracts or documents mentioned in the Red Herring
                        Prospectus may be amended or modified at any time if so
                        required in the interest of the Company or if required
                        by the other parties, without reference to the Company’s
                        Shareholders, subject to compliance with the provisions
                        contained in the Companies Act and other relevant
                        statutes.
                        <br />
                        <br /> The Material Contracts and Documents can also be
                        accessed by clicking the link below. The statements
                        contained in the Material Contracts and Documents speak
                        only as at the date as of which they are made, and the
                        Company expressly disclaims any obligation or
                        undertaking to supplement, amend or disseminate any
                        updates or revisions to any statements contained therein
                        to reflect any change in events, conditions or
                        circumstances on which any such statements are based.
                        This is not an offer document in terms of Companies Act
                        or the SEBI ICDR Regulations and the documents available
                        on this link do not constitute and should not be
                        construed as an offer to sell or issue or recommendation
                        or solicitation of an offer to buy or acquire securities
                        of the Company or its affiliates in any jurisdiction or
                        as an inducement to enter into investment activity. No
                        part of these documents should form the basis of, or be
                        relied on in connection with, any contract or commitment
                        or investment decision whatsoever.
                        <br /> <br />
                        You acknowledge and agree that the Material Contracts
                        and Documents may contain confidential information, and
                        the Company only authorizes you to inspect their
                        contents in accordance with the requirements of
                        applicable laws in relation to the Offer. You
                        acknowledge that the content of the Material Contracts
                        and Documents shall not be photographed, sold,
                        reproduced, or distributed under any circumstances and
                        for any purposes whatsoever.
                        <br />
                        <br />
                        By accessing these documents, you accept that this
                        disclaimer and any claims arising out of the use of the
                        information from these documents shall be governed by
                        the laws of India and only the courts in India, and no
                        other courts, shall have jurisdiction over the same.
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
                    </Dialog> */}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </Main>
  );
};

export default IPOOffersDocuments;
