import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const mock = [
  {
    name: 'Shashikanth Suryanarayanan',
    title: 'Executive Director',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      'MIT 30U30 Awardee; Prof. IIT Bombay & more description & more description & more description',
  },
  {
    name: 'Amit Dixit',
    title: 'Executive Director',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'PhD IIT Bombay & more description & more description & more description',
  },
  {
    name: 'Manish Sharma',
    title: 'Executive Director',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'IIT Bombay & more description & more description & more description',
  },
  {
    name: 'Anay Joshi',
    title: 'Promoter',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'IIT Bombay & more description & more description & more description',
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Promoters
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;





//-----------------------------------------------------------------------------

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';
// // import Typography from '@mui/material/Typography';
// // import {default as Chart1} from './Chart1';
// // import {default as Chart2} from './Chart2';

// const Slide1 = () => {
//   return (
//     <Box>
//       <Box
//         component={'a'}
//         display={'block'}
//         width={1}
//         height={1}
//         sx={{
//           textDecoration: 'none',
//           transition: 'all .2s ease-in-out',
//         }}
//       >
//         <Box
//           component={Card}
//           width={1}
//           height={1}
//           boxShadow={0}
//           display={'flex'}
//           flexDirection={{ xs: 'column', md: 'row-reverse' }}
//           sx={{ backgroundImage: 'none' }}
//         >
//           <Box
//             sx={{
//               width: { xs: 1, md: '50%' },
//               position: 'relative',
//               '& .lazy-load-image-loaded': {
//                 height: 1,
//                 display: 'flex !important',
//               },
//             }}
//           >
//             {/* <Chart2 type='pie'/>
//             <Chart1 type='bar'/> */}
//           </Box>
//           <CardContent
//             sx={{
//               position: 'relative',
//               width: { xs: 1, md: '50%' },
//               padding: 2,
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'start',
//             }}
//           >
//             <Box maxWidth={{ xs: 1, sm: '100%' }}>
//               <Typography
//                 variant='h4'
//                 color='text.primary'
//                 gutterBottom
//                 sx={{
//                   fontWeight: 600, 
//                 }}
//               >
//                 Promoters
//               </Typography>
//             </Box>
//             {/* <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={0}>
//               <Typography
//                 variant='h3'
//                 color="text.primary"
//                 gutterBottom
//                 sx={{
//                   fontWeight: 600, 
//                 }}
//               >
//                 India produces ~20M
//                 <br />
//               </Typography>
//             </Box> */}
//           </CardContent>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Slide1;
