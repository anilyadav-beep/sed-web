import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Container from 'components/Container';
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Main } from 'layouts';
import { brochures } from 'common/Brochures';
import { useNavigate } from 'react-router-dom';

const MaterialContracts = () => {
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  const navigate = useNavigate();

  const handleOpenModal = (url) => {
    setSelectedUrl(url);
    setOpen(true);
  };

  const handleConfirm = (url) => {
    setOpen(false);
  };

  const handleCancel = (url) => {
    navigate(url);
    setOpen(false);
  };

  useEffect(() => {
    handleOpenModal(
      '/investors/other-information/ipo-offer-documents/material-contracts',
    );
  }, []);
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
            Material Contracts And Documents
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            {brochures.map((items, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  key={idx}
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
                    href={items.url}
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
        <Dialog
          open={open}
          onClose={() =>
            handleCancel('/investors/other-information/ipo-offer-documents')
          }
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
          {/* <DialogTitle
                        sx={{
                          fontWeight: 100,
                          color: '#A03811',
                          fontSize: '14px',
                        }}
                      >
                        
                      </DialogTitle> */}
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
              Note: Capitalised terms not defined herein shall have the meaning
              ascribed to them in the Red Herring Prospectus and available at
              the following web-link:
              https://www.sedemac.com/investors/other-information/ipo-offer-documents/material-contracts.
            </i>
            <br />
            <br />
            The copies of the documents and contracts which have been entered or
            are to be entered into by SEDEMAC Mechatronics Limited (the{' '}
            <b>“Company”</b>) (not being contracts entered into in the ordinary
            course of business carried on by the Company includes contracts
            entered into until the date of the red herring prospectus dated
            February 25, 2026 (<b>“Red Herring Prospectus”</b>) which are or may
            be deemed material, as specified in the Red Herring Prospectus filed
            by the Company with the Registrar of Companies, Maharashtra at Pune
            (<b>“Material Contracts and Documents”</b>) may be inspected at the
            Company’s Registered and Corporate Office between 10 a.m. and 5 p.m.
            IST on all Working Days from the date of the Red Herring Prospectus
            until the Bid/Offer Closing Date (except for such agreements
            executed after the Bid/Offer Closing Date). Any of the contracts or
            documents mentioned in the Red Herring Prospectus may be amended or
            modified at any time if so required in the interest of the Company
            or if required by the other parties, without reference to the
            Company’s Shareholders, subject to compliance with the provisions
            contained in the Companies Act and other relevant statutes.
            <br />
            <br /> The Material Contracts and Documents can also be accessed by
            clicking the link below. The statements contained in the Material
            Contracts and Documents speak only as at the date as of which they
            are made, and the Company expressly disclaims any obligation or
            undertaking to supplement, amend or disseminate any updates or
            revisions to any statements contained therein to reflect any change
            in events, conditions or circumstances on which any such statements
            are based. This is not an offer document in terms of Companies Act
            or the SEBI ICDR Regulations and the documents available on this
            link do not constitute and should not be construed as an offer to
            sell or issue or recommendation or solicitation of an offer to buy
            or acquire securities of the Company or its affiliates in any
            jurisdiction or as an inducement to enter into investment activity.
            No part of these documents should form the basis of, or be relied on
            in connection with, any contract or commitment or investment
            decision whatsoever.
            <br /> <br />
            You acknowledge and agree that the Material Contracts and Documents
            may contain confidential information, and the Company only
            authorizes you to inspect their contents in accordance with the
            requirements of applicable laws in relation to the Offer. You
            acknowledge that the content of the Material Contracts and Documents
            shall not be photographed, sold, reproduced, or distributed under
            any circumstances and for any purposes whatsoever.
            <br />
            <br />
            By accessing these documents, you accept that this disclaimer and
            any claims arising out of the use of the information from these
            documents shall be governed by the laws of India and only the courts
            in India, and no other courts, shall have jurisdiction over the
            same.
          </DialogContent>

          <DialogActions sx={{ p: 2, justifyContent: 'flex-end' }}>
            <Button
              onClick={() =>
                handleCancel('/investors/other-information/ipo-offer-documents')
              }
              variant="outlined"
              color="error"
            >
              I Do Not Confirm
            </Button>

            <Button
              onClick={() =>
                handleConfirm(
                  '/investors/other-information/ipo-offer-documents/material-contracts',
                )
              }
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
      </Container>
    </Main>
  );
};

export default MaterialContracts;
