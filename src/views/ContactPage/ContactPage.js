import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero
} from './components';

const ContactPage = () => {
  return (
    <Main>
      <Box>
        <Container>
          <Hero />
        </Container>
      </Box>
    </Main>
  );
};

export default ContactPage;
