import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Jobs, About } from './components';

const JobOpenings = () => {
  const theme = useTheme();
  return (
    <Main>
      {/* <Box>
        <Container>
          <About />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box> */}
      <Box bgcolor={'alternate.main'} mt={5} pt={5}>
        <Container maxWidth={1000} className="p-0" maxheight={800}>
          <Jobs />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default JobOpenings;
