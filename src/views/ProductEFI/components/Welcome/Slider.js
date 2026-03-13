import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import isg from '../../../../assets/title/1.png';
// import isaac from '../../../../assets/title/2.png';
// import efi from '../../../../assets/title/3.png';
// import gcu from '../../../../assets/title/4.png';
//import pt from '../../../../assets/title/5.svg';

const mock = [isg];

const Featured = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 1;
  }
  if (isMd) {
    slidesToShow = 1;
  }
  if (isLg) {
    slidesToShow = 1;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box maxWidth={500} key={i} paddingX={2} marginY={4}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
            //   sx={{
            //     filter: 'brightness(0) invert(1)',
            //   }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Featured;
