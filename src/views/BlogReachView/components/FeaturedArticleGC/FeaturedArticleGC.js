import React from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import gcu from './../../../../assets/products/1MGCU.png';
const mock = {
  image: gcu,
  
  title:
    'On Us Addressing 1-Million Generators',
  author: {
    name: 'SEDEMAC',
    avatar: '',
  },
  date: 'January 2025',
};

const FeaturedArticle = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        component={'a'}
        href={'/blog/mgensets'}
        display={'block'}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: `translateY(-${theme.spacing(1 / 2)})`,
          },
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          boxShadow={4}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row-reverse' }}
          sx={{ backgroundImage: 'none' }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50%' },
              position: 'relative',
            }}
          >
            <Box
              component={'img'}
              loading="lazy"
              height={1}
              width={1}
              src={mock.image}
              alt="..."
              sx={{
                objectFit: 'cover',
                maxHeight: 360,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              component={'svg'}
              viewBox="0 0 112 690"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                position: 'absolute',
                bottom: 0,
                top: '-50%',
                left: 0,
                right: 0,
                color: theme.palette.background.paper,
                transform: 'scale(2)',
                height: 1,
                width: 'auto',
                transformOrigin: 'top center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <path
                d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                fill="currentColor"
              />
            </Box>
          </Box>
          <CardContent
            sx={{
              position: 'relative',
              width: { xs: 1, md: '50%' },
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant={'h5'} gutterBottom >
                {mock.title}
              </Typography>
              <Typography color="text.secondary">15 years after our genset controls foray got going, our controllers are now used on over a million generators worldwide. Also, today our products touch 60-70% of generators being manufactured in India and &gt; 10% of the generators currently being made, globally. This is a story of rapid growth of SEDEMAC in an otherwise stable, slow growth market. Driven by tech innovation, a strong quality record and long-term customer relationships with leaders. We continue to do interesting things that have the potential to move the industry further forward. <br /><br />Read on. And check out comments from the leadership of some of our key customers who have helped ushave been central to us building this business.</Typography>
            </Box>
            <Box>
              <Divider sx={{ marginY: 2 }} />
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box display={'flex'} alignItems={'center'}>
                  {mock.author.avatar && <Avatar src={mock.author.avatar} sx={{ marginRight: 1 }} />}
                  <Typography color={'text.secondary'}>
                    {mock.author.name}
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>{mock.date}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedArticle;