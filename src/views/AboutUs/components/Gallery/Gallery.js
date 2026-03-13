import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import mf1 from '../../../../assets/facilities/Chakan1.png';
import founder1 from '../../../../assets/facilities/Baner3.png';
import employees1 from '../../../../assets/facilities/Baner5.png';
import employees3 from '../../../../assets/facilities/founders1.jpg';

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
      src: mf1,
      source: '',
      rows: 1,
      cols: 2,
    },
    {
      src: founder1,
      source: '',
      rows: 1,
      cols: 1,
    },
    {
      src: employees1,
      source: '',
      rows: 1,
      cols: 1,
    },
    {
      src: employees3,
      source: '',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 180 : 'auto'}
          gap={isMd ? 5 : 8}
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
