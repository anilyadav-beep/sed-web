import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const listThem = [
  {
    name: '1',
    title: 'Conceive fresh technologies & create proof-of-concept',
  },
  {
    name: '2',
    title: 'Demo new concept to CEOs & CTOs of market leaders leading to bizwins',
  },
  {
    name: '3',
    title: 'Base product architecture around the technology developed',
  },
  {
    name: '4',
    title: 'Customize for high-volume customers with same base architecture',
  },
];

const Team = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        {listThem.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={''}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 1 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: 'h4', fontWeight: 700, align: 'center' }}
                    secondaryTypographyProps={{ variant: 'h6', align: 'center', color: 'black' }}
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
