import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { default as Slide1 } from './Slide1';
//import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('authenticated');
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
 
  const navigate = useNavigate();
  if (!authenticated) {
    navigate('/');
  }
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  },[]);

  
  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-5}
        paddingTop={5}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Slide1 />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Landing;
