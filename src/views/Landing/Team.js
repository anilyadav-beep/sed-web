import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AmitD from '../../../../assets/management/AmitD.jpg';
import ShashiS from '../../../../assets/management/ShashiS.jpg';
import RajeshS from '../../../../assets/management/RajeshS.jpg';
import Kunjan from '../../../../assets/management/Kunjan.png';

const team = [
  {
    name: 'Shashikanth Suryanarayanan',
    title: 'Founder, Chairman',
    avatar: ShashiS,
  },
  {
    name: 'Amit Dixit',
    title: 'Founder, Chief Technology Officer',
    avatar: AmitD,
  },
  {
    name: 'Rajesh S',
    title: 'VP, Finance & Accounts',
    avatar: RajeshS,
  },
  {
    name: 'Kunjan Gandhi',
    title: 'Manager, Corporate',
    avatar: Kunjan,
  },
];

const Team = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {team.map((item, i) => (
          <Grid item xs={12} md={12} key={i}>
            <Box
              key={i}
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 1 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar sx={{ marginRight: 2 }}>
                    <Avatar
                      src={item.avatar}
                      variant={'rounded'}
                      sx={{ width: 100, height: 100, borderRadius: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      fontWeight: 700,
                    }}
                    secondaryTypographyProps={{ variant: 'subtitle2' }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
