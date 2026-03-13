import { Box, Button, Grid, Typography } from '@mui/material';
import Container from 'components/Container';
import React from 'react';
import { Main } from 'layouts';
import Media from 'common/Media';

const policiesData = [];

const RHPHINDI = () => {
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
            Red Herring Prospectus Audio-Visual (Hindi)
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
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={7}
              sx={{
                display: { xs: 'flex', md: 'flex' },
              }}
            >
              <Box container display="flex" justifyContent="center" spacing={2}>
                <Media type="RHPHINDI" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default RHPHINDI;
