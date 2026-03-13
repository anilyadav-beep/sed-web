import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
// import { Headline, Story, Team } from './components';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import Committee from '@mui/icons-material/Group';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  ListItemText,
  NoSsr,
  Typography,
} from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Main } from 'layouts';

const teamMembers = [
  { title: 'Our Management' },
  { title: 'Management Team' },
  { title: 'Management Team' },
  // { title: 'Leadership Team' },
  // { title: 'Advisory Board' },
  // { title: 'Operations Team' },
  // { title: 'Engineering Team' },
  // { title: 'Marketing Team' },
];

const cards = [
  {
    title: 'Board Meetings',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    // link: '/investors/corporate-governance',
  },
  {
    title: 'Shareholding Pattern',
    icon: <ArticleIcon fontSize="large" sx={{ color: '#A03811' }} />,
    // link: '/investors/other-disclosures',
  },
  // {
  //   title: 'IPO Offer Documents',
  //   icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/other-information/ipo-offer-documents',
  // },
  // {
  //   title: 'Credit Ratings',
  //   icon: <Committee fontSize="large" sx={{ color: '#A03811' }} />,
  //   link: '/investors/financial-information/credit-ratings',
  // },
  // { title: 'Operations Team', icon: <Committee fontSize="large" /> },
  // { title: 'Engineering', icon: <Committee fontSize="large" /> },
  // { title: 'Marketing', icon: <Committee fontSize="large" /> },
];

const Miscellaneous = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    // <Main>
    //   <Container>
    //     <Box
    //       className="jarallax"
    //       data-jarallax
    //       data-speed="0.2"
    //       id="team"
    //       // marginTop={-10}
    //       sx={{
    //         // minHeight: '65vh',
    //         // p: { xs: 2, md: 4 },
    //         backgroundColor: '#fff',
    //       }}
    //     >
    //       {/* <Box>
    //         <Typography
    //           sx={{
    //             textTransform: 'uppercase',
    //             fontWeight: 'medium',
    //             color: 'text.primary',
    //           }}
    //           gutterBottom
    //           color={'text.secondary'}
    //           align={'center'}
    //           // marginTop={10}
    //         >
    //           SEDEMAC
    //         </Typography>
    //         <Typography
    //           fontWeight={700}
    //           variant={'h4'}
    //           align={'center'}

    //           marginBottom={5}
    //           color='#A03811'
    //         >
    //           Other Information
    //         </Typography>
    //       </Box> */}
    //       <Grid container spacing={3} justifyContent="center">
    //         {cards.map((item, index) => (
    //           <Grid item xs={12} sm={6} md={4} key={index}>
    //             <Card
    //               sx={{
    //                 backgroundColor: '#ffe3ccff',
    //                 borderRadius: 3,
    //                 boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    //                 transition: 'transform 0.3s ease',
    //                 height: 180,
    //                 '&:hover': {
    //                   transform: 'translateY(-4px)',
    //                 },
    //               }}
    //               onClick={() => navigate(item.link)} // Navigate to the specified link on click
    //             >
    //               <CardContent
    //                 sx={{
    //                   display: 'flex',
    //                   flexDirection: 'column',
    //                   justifyContent: 'space-between',
    //                   height: '100%',
    //                   p: 3,
    //                 }}
    //               >
    //                 {/* Top icon */}
    //                 <Box>{item.icon}</Box>

    //                 {/* Title and arrow */}
    //                 <Box
    //                   display="flex"
    //                   justifyContent="space-between"
    //                   alignItems="center"
    //                 >
    //                   <Typography
    //                     variant="h6"
    //                     sx={{
    //                       color: theme.palette.text.primary,
    //                       fontWeight: 'bold',
    //                       lineHeight: 1.3,
    //                     }}
    //                   >
    //                     {item.title}
    //                   </Typography>
    //                   <ArrowForwardIosIcon
    //                     sx={{ color: '#662804', fontSize: 18 }}
    //                   />
    //                 </Box>
    //               </CardContent>
    //             </Card>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Box>
    //   </Container>
    // </Main>
    <Main>
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
              ml={{ xs: 5, md: 0 }}
              mt={{ xs: 2, md: 0 }}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 7 },
                fontSize: { xs: '28px', md: '36px' },
              }}
            >
              Miscellaneous
              </Typography>
          <Grid
            container
            // width="100%"
            spacing={6}
            display={'flex'}
            justifyContent="center"
            alignItems="center"
          >
            {cards.map((item, index) => (
              <Grid item xs={10} sm={4} md={2.4} key={index}>
                <Card
                  onClick={() => navigate(item.link)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    borderRadius: 4,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    backgroundColor: '#ffe3ccff',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                    transition:
                      'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
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
                      sx={{ mt: 1, fontWeight: 'bold', color: 'text.primary' }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Miscellaneous;
