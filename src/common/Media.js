import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import useAnalyticsEventTracker from '../googleAnalytics/useAnalyticsEventTracker';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const Media = ({ item, i, type }) => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Careers-Videos');
  const embedUrl = item?.media
    ? item?.media?.includes('list=')
      ? item?.media
          .replace('watch?v=', 'embed/')
          .replace('&list=', '?playlist=') + '&loop=1'
      : item?.media.replace('watch?v=', 'embed/')
    : null;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return type === 'ISG' ? (
    // <Grid
    //   item
    //   xs={12}
    //   sm={6}
    //   md={3}
    //   key={i}
    //   data-aos={'fade-up'}
    //   data-aos-delay={i * 100}
    //   data-aos-offset={100}
    //   data-aos-duration={600}
    // >
    //   <Box display={'block'} width={1} height={1}>
    //     <Box
    //       component={Card}
    //       width={1}
    //       height={1}
    //       display={'flex'}
    //       flexDirection={'column'}
    //     >
    //       <Box
    //         component={'iframe'}
    //         title="video"
    //         width="100%"
    //         height="100%"
    //         minHeight={300}
    //         src={item.media}
    //         frameBorder="0"
    //         allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    //         borderRadius={0}
    //         allowFullScreen // Chrome, Safari, Edge
    //         webkitAllowFullScreen // Safari iOS
    //         mozAllowFullScreen // Firefox
    //         onClick={() => gaEventTracker(item.title)}
    //       />
    //       <CardContent>
    //         <Typography
    //           fontWeight="15px"
    //           align={'center'}
    //           sx={{ fontWeight: 400 }}
    //         >
    //           {item.title}
    //         </Typography>
    //         <Typography
    //           fontWeight="15px"
    //           align={'center'}
    //           sx={{ fontWeight: 400 }}
    //         >
    //           {item.description}
    //         </Typography>
    //       </CardContent>
    //     </Box>
    //   </Box>
    // </Grid>
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={i}
      data-aos={'fade-up'}
      data-aos-delay={i * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height="100%"
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            component={'iframe'}
            title="video"
            width="100%"
            height={300} // FIXED HEIGHT FOR UNIFORMITY
            sx={{ flexShrink: 0 }}
            src={item.media}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onClick={() => gaEventTracker(item.title)}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography align="center" sx={{fontSize: 15, fontWeight: 'bold' }}>
              {item.title}
            </Typography>
            <Typography align="center" sx={{ fontWeight: 400, fontSize: 14 }}>
              {item.description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Grid>
  ) : type === 'Tansition' ? (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      data-aos={'fade-up'}
      data-aos-delay={i * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            src={'https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0'}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            borderRadius={0}
            // onClick={() => gaEventTracker(item.title)}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'eBike' ? (
    // <Box
    //   component={'iframe'}
    //   title="video"
    //   width="100%"
    //   height="100%"
    //   minHeight={250}
    //   src='https://www.youtube.com/embed/iCTpHmXHMq4?rel=0'
    //   onClick={() => gaEventTracker('Power-Tools-Watch')}
    //   frameBorder="0"
    //   allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    //   borderRadius={2}
    // />
    <Grid
      item
      xs={12}
      sm={8}
      md={10}
      key={i}
      data-aos={'fade-up'}
      data-aos-delay={i * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={400}
            src={'https://www.youtube.com/embed/iCTpHmXHMq4?rel=0'}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            borderRadius={0}
            // onClick={() => gaEventTracker(item.title)}
          />
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'pTools' ? (
    // <Box
    //   component={'iframe'}
    //   title="video"
    //   width="100%"
    //   height="100%"
    //   minHeight={250}
    //   src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
    //   onClick={() => gaEventTracker('Power-Tools-Watch')}
    //   frameBorder="0"
    //   allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    //   borderRadius={2}
    // />
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      // data-aos={'fade-up'}
      // data-aos-delay={i * 100}
      // data-aos-offset={100}
      // data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            onClick={() => gaEventTracker('Power-Tools-Watch')}
            src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // ← ADD THIS
            style={{ border: 0 }}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'blog' ? (
    <Box display={'block'} width={1} height={1}>
      <Box
        component={Card}
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box
          component={'iframe'}
          title="video"
          width="100%"
          height="100%"
          minHeight={220}
          src={item.media}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          borderRadius={0}
        />
        <CardContent>
          <Typography
            variant={'subtitle1'}
            align={'left'}
            sx={{ fontWeight: 700 }}
          >
            {item.title}
          </Typography>
          <Box display={'flex'} alignItems={'center'} marginY={2}>
            <Typography variant={'subtitle2'} color="text.secondary">
              {item.description}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Box>
  ) : type === 'DRHP' ? (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      // data-aos={'fade-up'}
      // data-aos-delay={i * 100}
      // data-aos-offset={100}
      // data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            onClick={() => gaEventTracker('Power-Tools-Watch')}
            src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // ← ADD THIS
            style={{ border: 0 }}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/GXhLFNHdDzU"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'DRHPHINDI' ? (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      // data-aos={'fade-up'}
      // data-aos-delay={i * 100}
      // data-aos-offset={100}
      // data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            onClick={() => gaEventTracker('Power-Tools-Watch')}
            src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // ← ADD THIS
            style={{ border: 0 }}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/VgIDVVYL5Yo"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'RHPENGLISH' ? (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      // data-aos={'fade-up'}
      // data-aos-delay={i * 100}
      // data-aos-offset={100}
      // data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            onClick={() => gaEventTracker('Power-Tools-Watch')}
            src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // ← ADD THIS
            style={{ border: 0 }}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/Oyb0KmV2Ml0"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : type === 'RHPHINDI' ? (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      key={i}
      // data-aos={'fade-up'}
      // data-aos-delay={i * 100}
      // data-aos-offset={100}
      // data-aos-duration={600}
    >
      <Box display={'block'} width={1} height={1}>
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* <Box
            component={'iframe'}
            title="video"
            width="100%"
            height="100%"
            minHeight={350}
            minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            onClick={() => gaEventTracker('Power-Tools-Watch')}
            src="https://www.youtube.com/embed/Jhqqr0RXRMU?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // ← ADD THIS
            style={{ border: 0 }}
          /> */}

          <Box display="block" width={1} height={1}>
            <Box
              component={Card}
              // width={1}
              height={1}
              display="flex"
              flexDirection="column"
              minWidth={{ xs: 360, sm: 480, md: 600, lg: 650 }}
            >
              <iframe
                title="video"
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/2KK3cGxAieI"
                frameBorder="0"
                onClick={() => gaEventTracker('Power-Tools-Watch')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Chrome, Safari, Edge
                webkitAllowFullScreen // Safari iOS
                mozAllowFullScreen // Firefox
                style={{
                  border: 0,
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Box>
          {/* <CardContent>
              <Typography
                variant={'h7'}
                align={'left'}
                sx={{ fontWeight: 700 }}
              >
                {item.title}
              </Typography>
            </CardContent> */}
        </Box>
      </Box>
    </Grid>
  ) : (
    <Box marginTop={15}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4} marginTop={15}>
            <Typography sx={{ fontWeight: 700 }} variant={'h5'} gutterBottom>
              Careers for Ambitious Engineers
            </Typography>
            <Typography
              variant={'h7'}
              component={'p'}
              color={'text.secondary'}
              sx={{ fontWeight: 500 }}
            >
              If you are an ambitious, creative engineer then you'd like it here
              at SEDEMAC
            </Typography>
          </Box>
          <List disablePadding sx={{ display: 'flex', flexDirection: 'row' }}>
            <ListItem
              disableGutters
              data-aos="fade-up"
              data-aos-offset={100}
              data-aos-duration={600}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <ListItemText secondary={item.subtitle} />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={3}
          sx={{ display: { xs: 'flex', md: 'flex' } }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={320}
              src={embedUrl}
              onClick={() => gaEventTracker('Power-Tools-Watch')}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              borderRadius={2}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Media;
