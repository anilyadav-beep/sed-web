import { Box, Button, Grid, Typography } from '@mui/material';
import Container from 'components/Container';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Main } from 'layouts';

const policiesData = [];

const Agreements = () => {
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
            //  ml={{ xs: 5, md: 0 }}
            mt={{ xs: 0, md: -2 }}
            sx={{
              fontWeight: 700,
              mb: { xs: 3, md: 3 },
              fontSize: { xs: '28px', md: '36px' },
            }}
          >
            Agreements
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {policiesData.map((items, idx) => (
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
      </Container>
    </Main>
  );
};

export default Agreements;
