import React from 'react';
// import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import CardMedia from '@mui/material/CardMedia';
// import genset from '../../assets/applications/Genset.jpg';
// import ev from '../../assets/applications/EVProducts.jpg';
// import ice from '../../assets/applications/ICE2WProducts.jpg';
// import pt from '../../assets/applications/PT.jpg';
// const apps = [
//   {
//     media: ice,
//   },
//   {
//     media: ev,
//   },
//   {
//     media: genset,
//   },
//   {
//     media: pt,
//   },
// ];


const Slide2 = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Box
        component={'a'}
        display={'block'}
        width={1}
        height={1}
        
      >
        {/* <Grid container spacing={4}>
          {apps.map((item, i) => (
            <Grid
              item
              xs={12}
              md={3}
              key={i}
            >
              <Box 
                display={'block'} 
                component={'a'}
                width={1} 
                height={1}
                
              >
                <Box
                  //component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <CardMedia
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 200, sm: 200, md: 200 },
                      overflow: 'hidden',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid> */}
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={0}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '100%' },
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* <Box maxWidth={{ xs: 1, sm: '100%' }} marginTop={5}>
              <Typography
                variant='h4'
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 600, 
                }}
              >
                Innovative, critical-to-the-application Control Products 
                <br />
                <Typography
                  color={'primary.dark'}
                  component={'span'}
                  variant={'inherit'}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.0,
                    )} 0%)`,
                  }}
                > for {' '} Small Vehicles, Generators, Power Tools
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{ fontWeight: 400 }}
              >
                supplied in large volumes to market leaders from in-house manufacturing lines.
              </Typography>
            </Box> */}
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Slide2;
