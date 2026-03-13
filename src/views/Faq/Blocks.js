import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const list1 = [
  {
    name: '1',
    title: 'EV',
    link:'slide-5'
  },
  {
    name: '2',
    title: 'Chip',
    link:'slide-2'
  },
  {
    name: '3',
    title: 'Forex',
    link:'slide-8'
  },
 
];

const list2 = [
  {
    name: '4',
    title: 'West',
    link:'slide-3'
  },
  {
    name: '5',
    title: 'Copy',
    link:'slide-4'
  },
 
  {
    name: '6',
    title: 'Biggies',
    link:'slide-6'
  },
  {
    name: '7',
    title: 'Adoption',
    link:'slide-7'
  },
  
];

const Team = () => {
  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };
  return (
    <Box>
      <Grid container spacing={2} marginBottom={4}>
        {list1.map((item, i) => (
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
                <ListItem component="div" disableGutters sx={{ padding: 0, cursor:'help' }} onClick={() => scrollTo(item.link)}>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: 'h4', fontWeight: 700, align: 'center', padding: 1 }}
                    secondaryTypographyProps={{ variant: 'h6', align: 'center', color: 'black' }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={6}>
        {list2.map((item, i) => (
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
                <ListItem component="div" disableGutters sx={{ padding: 0, cursor:'help' }} onClick={() => scrollTo(item.link)}>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: 'h4', fontWeight: 700, align: 'center', padding: 1 }}
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
