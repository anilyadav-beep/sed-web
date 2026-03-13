import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import baner1 from '../../../../assets/facilities/BanerExtC.jpg';
import baner2 from '../../../../assets/facilities/Baner9.png';
import baner3 from '../../../../assets/facilities/mf1.jpg';
import baner4 from '../../../../assets/facilities/Chakan1.png';

const Ambience1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const photos = [
    { src: baner1, rows: 1, cols: 2 },
    { src: baner2, rows: 1, cols: 1 },
    { src: baner3, rows: 1, cols: 1 },
    { src: baner4, rows: 1, cols: 2 },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <ImageList
        variant={isMd ? 'quilted' : 'masonry'}
        cols={isMd ? 3 : 1}
        rowHeight={isMd ? 280 : 'auto'}
        gap={isMd ? 16 : 10}
        sx={{ width: '100%' }}
      >
        {photos.map((item, i) => (
          <ImageListItem
            key={i}
            cols={isMd ? item.cols : 1}
            rows={isMd ? item.rows : 1}
          >
            <LazyLoadImage
              src={item.src}
              alt="Gallery"
              width="100%"
              height="100%"
              onClick={() => openLightbox(i)}
              effect="blur"
              style={{
                objectFit: isMd ? 'cover' : 'contain',
                borderRadius: 8,
                cursor: 'pointer',
                display: 'block',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
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

export default Ambience1;
