import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Content,
  Hero,
} from './components';

const BlogArticle = () => {

  return (
    <Main colorInvert={false}>
      <Box>
        <Container>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item xs={11} md={9}>
              <Hero />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item xs={11} md={9}>
              <Content />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default BlogArticle;
