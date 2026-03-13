import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const traction = [
  {
    name: '1',
    title: 'Successful demo to a Europe-based world leader.',
  },
  {
    name: '2',
    title: 'Keen attention & engagement of CEO/CTO.',
  },
  {
    name: '3',
    title: 'Technology is seen as ready to go on many of their tools.',
  },
];

const Team = () => {

  return (
    <Box>
      <Grid container spacing={2}>
        {traction.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
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
