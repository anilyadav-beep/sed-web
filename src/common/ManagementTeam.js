// import {
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   ListItemText,
//   Typography,
// } from '@mui/material';
// import React from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';
// const ManagementTeam = ({ item, i }) => {
//   const theme = useTheme();
//   const gaEventTracker = useAnalyticsEventTracker('Click-About-Us');
//   return (
//     <Grid item xs={12} sm={6} md={4} key={i}>
//       <Box
//         component={Card}
//         sx={{
//           textDecoration: 'none',
//           transition: 'all .2s ease-in-out',
//           '&:hover': {
//             transform: `translateY(-${theme.spacing(1 / 2)})`,
//           },
//         }}
//       >
//         <CardContent>
//           <Box component={Avatar} src={item.avatar} height={80} width={80} sx={{border: `2px solid ${theme.palette.primary.main}`}} />
//           <Box marginTop={4}>
//             <ListItemText
//               primary={
//                 <Typography variant="subtitle1" fontWeight="bold" color={'primary'}>
//                   {item.name}
//                 </Typography>
//               }
//               secondary={<Typography variant={'subtitle2'} color={'text.primary'}>{item.title}</Typography>}
//             />
//             <Typography variant={'subtitle2'} color={'text.primary'}>
//               {item.about}
//             </Typography>
//             <Box marginTop={4}>
//               <IconButton size={'small'} style={{ color: '#1330d3ff' }} href={item.linkedin} onClick={() => gaEventTracker(item.name)}>
//                 <LinkedInIcon  />
//               </IconButton>
//             </Box>
//           </Box>
//         </CardContent>
//       </Box>
//     </Grid>
//   );
// };

// export default ManagementTeam;

import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';

const ManagementTeam = ({ item, i }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-About-Us');

  return (
    //
    <Grid item xs={12} sm={6} md={4} key={i}>
      <Card
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '&:hover': {
            transform: `translateY(-${theme.spacing(0.5)})`,
          },
        }}
      >
        <CardContent
          sx={{
            height: 160,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            position: 'relative', // ✅ needed for absolute positioning
          }}
        >
          {/* Left: Avatar */}
          <Avatar
            src={item.avatar}
            sx={{
              width: 80,
              height: 80,
              border: `2px solid ${theme.palette.primary.main}`,
              flexShrink: 0,
            }}
          />

          {/* Right: Details */}
          <Box flex={1} overflow="hidden">
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="primary"
                  // noWrap
                >
                  {item.name}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle2" color="text.primary">
                  {item.title}
                </Typography>
              }
            />

            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {item.about}
            </Typography>
          </Box>

          {/* ✅ Bottom-right LinkedIn Icon */}
          <IconButton
            size="small"
            sx={{
              color: '#1330d3ff',
              position: 'absolute',
              bottom: 8,
              right: 15,
            }}
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gaEventTracker(item.name)}
          >
            <LinkedInIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ManagementTeam;
