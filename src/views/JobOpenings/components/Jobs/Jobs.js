import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

export const mock = [
  {
    title: 'For latest job openings, visit our LinkedIn page',
    location: '',
    type: '',
    team: '',
    subtitle: 'or write to careers@sedemac.com with your Resume',
    href: 'https://www.linkedin.com/company/sedemac-mechatronics/jobs',
  },
];

const Jobs = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Job-Listings');
  return (
    <Box 
    sx={{
        // minHeight: '100vh', // full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.palette.background.default, // optional
        p: 2, // padding
        mt:7
      }}
    >
      <Box width="100%">
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'primary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'h6'}
          fontWeight={600}
        >
          Job Openings
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={1} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>
                  {`${item.team}  ${item.location}`}
                </Typography>
              </Box>
              <Box marginLeft={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href={item.href}
                  onClick={() => gaEventTracker(item.title)}
                  target="_blank"
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width={20}
                      height={20}
                      color={'#1330d3ff'}
                    >
                      <LinkedInIcon />
                    </Box>
                  }
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default Jobs;


// import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';

// export const mock = [
//   {
//     title: 'For latest job openings, please go to our LinkedIn page',
//     location: '',
//     type: '',
//     team: '',
//     subtitle: 'or write to careers@sedemac.com with your Resume',
//     href: 'https://www.linkedin.com/company/sedemac-mechatronics/jobs',
//   },
// ];

// const Jobs = () => {
//   const theme = useTheme();
//   const gaEventTracker = useAnalyticsEventTracker('Click-Job-Listings');

//   return (
//     <Box
//       sx={{
//         // minHeight: '100vh', // full viewport height
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // backgroundColor: theme.palette.background.default, // optional
//         p: 2, // padding
//         mt:0
//       }}
//     >
//       <Box width="100%" maxWidth={700}>
//         <Box marginBottom={4}>
//           <Typography
//             align="center"
//             color="primary"
//             sx={{ textTransform: 'uppercase' }}
//             variant="h6"
//             fontWeight={600}
//           >
//             Job Openings
//           </Typography>
//         </Box>

//         <Grid
//           container
//           sx={{
//             // background: theme.palette.background.paper,
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           {mock.map((item, i) => (
//             <Grid
//               item
//               xs={12}
//               key={i}
//               sx={{
//                 borderBottom: `1px solid ${theme.palette.divider}`,
//                 '&:last-child': { borderBottom: 0 },
//               }}
//             >
//               <Box padding={2} display="flex" alignItems="center">
//                 <Box
//                   display="flex"
//                   flexDirection={{ xs: 'column', sm: 'row' }}
//                   flex="1 1 100%"
//                   justifyContent={{ sm: 'space-between' }}
//                   alignItems={{ sm: 'center' }}
//                 >
//                   <Box marginBottom={{ xs: 1, sm: 0 }}>
//                     <Typography variant="subtitle1" fontWeight={700}>
//                       {item.title}
//                     </Typography>
//                     <Typography color="text.secondary">
//                       {item.subtitle}
//                     </Typography>
//                   </Box>
//                   <Typography color="text.secondary">
//                     {`${item.team}  ${item.location}`}
//                   </Typography>
//                 </Box>

//                 <Box marginLeft={2}>
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     size="small"
//                     href={item.href}
//                     onClick={() => gaEventTracker(item.title)}
//                     target="_blank"
//                     endIcon={<LinkedInIcon />}
//                   >
//                     Apply
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Jobs;
