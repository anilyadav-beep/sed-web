import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import baner1 from '../../../../assets/facilities/Baner8.png';
import baner2 from '../../../../assets/facilities/Baner2.png';
import baner3 from '../../../../assets/facilities/Baner5.png';
import chakan1 from '../../../../assets/facilities/Chakan1.png';



const Ambience = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: baner1,
      source: 'https://assets.maccarianagency.com/backgrounds/img30.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: baner2,
      source: 'https://assets.maccarianagency.com/backgrounds/img31.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: baner3,
      source: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: chakan1,
      source: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Work at SEDEMAC
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Explore Job Listings
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
        >
          We value competent &amp; ambitious professionals with high ethical standards.
        </Typography>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 3}
              rows={isMd ? item.rows || 1 : 1}
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Ambience;
