import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
// import Container from 'components/Container';
import { default as Slide1 } from './Slide1';
import { default as Slide2 } from './Slide2';
import { default as Slide3 } from './Slide3';
import { default as Slide4 } from './Slide4';
import { default as Slide5 } from './Slide5';
import { default as Slide6 } from './Slide6';
import { default as Slide7 } from './Slide7';
import { default as Slide8 } from './Slide8';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

// import bgImg from './../../assets/title/BGWhite.png';

const FAQ = () => {
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
  }, []);

  const [expanded, setExpanded] = useState(false);
  const [expandedFirst, setExpandedFirst] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setExpandedFirst(
      panel === 'panel1' ? true : isExpanded === false ? true : false,
    );
  };

  // const scrollTo = (id) => {
  //   setTimeout(() => {
  //     const element = document.querySelector(`#${id}`);
  //     if (!element) {
  //       return;
  //     }

  //     window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
  //   });
  // };

  // const theme = useTheme();

  // const styles = (bgImage) => ({
  //   position: 'absolute',
  //   objectFit: 'cover',
  //   /* support for plugin https://github.com/bfred-it/object-fit-images */
  //   fontFamily: 'object-fit: cover;',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   backgroundImage: `url(${bgImage})`,
  //   filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  // });

  return (
    <Main>
      <Container>
        <Slide1 />
        {/* <Box
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          bgcolor={''}
          marginTop={-5}
          paddingTop={5}
          id="slide-1"
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
        >
          <Container>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Slide1 />
              <Box marginTop={4}>
                <NoSsr>
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width={{ xs: 30, sm: 40 }}
                    height={{ xs: 30, sm: 40 }}
                    onClick={() => scrollTo('slide-2')}
                    sx={{ cursor: 'pointer' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      clipRule="evenodd"
                    />
                  </Box>
                </NoSsr>
              </Box>
            </Box>
          </Container>
        </Box> */}
        {/* <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-2"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide2 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-3')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-3"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide3 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-4')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-4"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide4 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-5')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-5"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide5 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-6')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-6"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide6 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-7')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-7"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide7 />
            <Box
              marginTop={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-8')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          id="slide-8"
        >
          <Box className={'jarallax-img'} sx={styles(bgImg)} />
          <Container marginTop={0}>
            <Box
              margin={4}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('slide-1')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </Box>
              </NoSsr>
            </Box>
            <Slide8 />
          </Container>
        </Box> */}

        {/* //----------------------------------------------------------------------------------- */}

        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                backgroundColor:
                  expanded === 'panel1'
                    ? '#FFFFAD'
                    : expandedFirst === true
                      ? '#FFFFAD'
                      : '#ffffff',
                '&:hover': {
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(230, 221, 143, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{ width: '100%', flexShrink: 0, fontWeight: 100 }}
              >
               1. What do you think of EV Adoption in 2-Wheelers?
              </Typography>

              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide5 />
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{
                backgroundColor: expanded === 'panel2' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{ width: '100%', flexShrink: 0, fontWeight: 200 }}
              >
                2. Do you see impact of chip-shortage?
              </Typography>
              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                You are currently not an owner
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide2 />
              {/* <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{
                backgroundColor: expanded === 'panel3' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{ width: '100%', flexShrink: 0, fontWeight: 100 }}
              >
                3.  What is the impact of $/₹ Fx-rate on your business?
              </Typography>
              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide8 />
              {/* <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{
                backgroundColor: expanded === 'panel4' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{ width: '100%', flexShrink: 0, fontWeight: 100 }}
              >
                4. You claim you are world first in something. How come others in the West haven&apos;t come up with it? They must have been working for years?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slide3 />
              {/* <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
              sx={{
                backgroundColor: expanded === 'panel5' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{ width: '100%', flexShrink: 0, fontWeight: 200 }}
              >
                5. Why can&apos;t someone from copy &amp; offer for cheap?
              </Typography>

              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide4 />
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            onChange={handleChange('panel6')}
            expanded={expanded === 'panel6'}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
              sx={{
                backgroundColor: expanded === 'panel6' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{
                  width: '100%',
                  flexShrink: 0,
                  fontWeight: 200,
                }}
              >
                6. Why can&apos;t a big global Tier-1 like  BOSCH beat you?
              </Typography>

              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide6 />
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
            sx={{ marginBottom: 10 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
              sx={{
                backgroundColor: expanded === 'panel7' ? '#FFFFAD' : '#ffffff',
                '&:hover': {
                  // transform: `translateY(-${theme.spacing(1 / 2)})`,
                  backgroundColor: '#FFFFAD',
                  boxShadow: '0px 4px 20px rgba(243, 222, 32, 0.1)',
                },
              }}
            >
              <Typography
                component="span"
                variant="h7"
                sx={{
                  width: '100%',
                  flexShrink: 0,
                  fontWeight: 200,
                }}
              >
                7. Why is everyone not adopting immediately if indeed you are world first?
              </Typography>

              {/* <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Slide7 />
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </Main>
  );
};

export default FAQ;
