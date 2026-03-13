import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './components';
import ISGEFITitle from './../../assets/applications/ISGEFI.png';
import gcu from './../../assets/products/1MGCU.png';
import BlogFeature from 'common/BlogFeature';
import NoSsr from '@mui/material/NoSsr';
import { scrollToElement } from 'common/styles';
import { useTheme } from '@emotion/react';
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
const mock = [
  {
    image: ISGEFITitle,
    description:
      'Electronic Fuel Injection (EFI) & Integrator Starter Generators (ISG) are two major control technologies seen in ICE-powered 2-wheelers. Legislation-driven EFI provides the benefit of reduced emissions and has reached close to 100% adoption in India. User adoption-driven ISG provides delightful, silent starts. Starting from zero in 2018, it has reached an adoption of 30% of vehicles as of 2023. Integration of electronics for ISG & EFI provides a compelling cost argument for ISG becoming default on all ICE-powered 2-wheelers.',
    title: 'Integrated ISG+EFI ECUs',
    author: {
      name: 'SEDEMAC',
      avatar: '',
    },
    date: 'September 2023',
    link: '/blog/isgefi',
  },
  {
    image: gcu,
    description:
      '15 years after our genset controls foray got going, our controllers are now used on over a million generators worldwide. Also, today our products touch 60-70% of generators being manufactured in India and &gt; 10% of the generators currently being made, globally. This is a story of rapid growth of SEDEMAC in an otherwise stable, slow growth market. Driven by tech innovation, a strong quality record and long-term customer relationships with leaders. We continue to do interesting things that have the potential to move the industry further forward. <br /><br />Read on. And check out comments from the leadership of some of our key customers who have helped ushave been central to us building this business.',
    title: 'On Us Addressing 1-Million Generators',
    author: {
      name: 'SEDEMAC',
      avatar: '',
    },
    date: 'January 2025',
    link: '/blog/mgensets',
  },
];
const BlogReachView = () => {
  const theme = useTheme();
  // const scrollTo = useCallback((id) => {
  //   setTimeout(() => {
  //     const element = document.querySelector(`#${id}`);
  //     if (!element) {
  //       return;
  //     }

  //     window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
  //   });
  // },[]);

  const scrollTo = useCallback((id) => scrollToElement(id), []);
  return (
    <Main colorInvert={false}>
      <Box position={'relative'}>
        <Hero />
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={{xs:-2, md:-10}}>
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                // onClick={() => scrollTo('feature')}
                onClick={() => {
                  const section = document.getElementById('feature');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
            
        </Container>
        <Container  id="feature">
          <Box minHeight={"70vh"} paddingTop={{xs:8, md:0}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid container spacing={4} alignItems="stretch" className={'jarallax'}
            data-jarallax
            data-speed="0.2"
            // position={'relative'}
            // minHeight={'90vh'}
           >
              {mock.map((item, i) => (
                <Grid item xs={12} sm={6} key={i} display="flex">
                  <Box
                    className={'jarallax'}
                    data-jarallax
                    data-speed="0.2"
                    position="relative"
                    display="flex"
                    alignItems="stretch"
                    width="100%"
                    // id="feature"
                  >
                    <Box
                      component="a"
                      href={item.link}
                      sx={{
                        textDecoration: 'none',
                        transition: 'all .2s ease-in-out',
                        width: 1,
                        '&:hover': {
                          transform: (theme) =>
                            `translateY(-${theme.spacing(0.5)})`,
                        },
                      }}
                    >
                      <Card
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', md: 'row-reverse' },
                          boxShadow: 4,
                          backgroundImage: 'none',
                          height: '100%', // ✅ Makes card fill full height of grid cell
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 1, md: '50%' },
                            position: 'relative',
                            display: 'flex',
                          }}
                        >
                          <Box
                            component="img"
                            loading="lazy"
                            src={item.image}
                            alt="..."
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              maxHeight: { xs: 240, md: 'auto' },
                            }}
                          />
                          <Chip
                            label="Featured"
                            sx={{
                              position: 'absolute',
                              top: 20,
                              right: 20,
                              bgcolor: 'background.paper',
                            }}
                          />
                        </Box>

                        <CardContent
                          sx={{
                            width: { xs: 1, md: '50%' },
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                          }}
                        >
                          <Box flexGrow={1}>
                            <Typography variant="h5" gutterBottom>
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{ fontSize: '8px' }}
                              color="text.secondary"
                              variant="subtitle2"
                              component="div"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></Typography>
                          </Box>

                          <Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Box display="flex" alignItems="center">
                                {item.author.avatar && (
                                  <Avatar
                                    src={item.author.avatar}
                                    sx={{ marginRight: 1 }}
                                  />
                                )}
                                <Typography color="text.secondary">
                                  {item.author.name}
                                </Typography>
                              </Box>
                              <Typography color="text.secondary">
                                {item.date}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default BlogReachView;
