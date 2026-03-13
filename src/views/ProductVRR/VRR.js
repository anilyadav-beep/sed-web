import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import vrr from '../../assets/products/VRR.png';
import ICEProductDetails from 'common/ICEProductDetails';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
  Button,
  Chip,
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mock = {
  image: vrr,
  description:
    'Interface with single phase or three phase magnetos and provide regulated DC voltage for battery charging and for supporting electrical loads. Provision to integrate auxiliary outputs such as for headlamp control.',
  feature1:
    'Single phase / Three phase series regulation configuration up to 300W DC load',
  feature2: 'Optional integration of bulb / LED headlamp driving',
  feature3: 'Separate capacitor support for EFI loads',
  feature4: 'Cycle-by-cycle regulation control',
  feature5: 'Smart, FET-based voltage regulation variants available',
  title: 'Voltage Regulators',
  date: 'In Production Since 2016',
};

const Agency = () => {
  return (
    <Main>
      <Box
        minHeight={'80vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={''}
        marginTop={-2.6}

      >
        {/* <Container>
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row-reverse' },
              boxShadow: 3,
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper',
                p: { xs: 2, md: 0 },
              }}
            >
              <LazyLoadImage
                src={mock.image}
                alt="VRR"
                effect="blur"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '300px', // Controls mobile height
                  objectFit: 'contain',
                }}
              />
              <Chip
                label="VRR"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                }}
              />
            </Box>
            <CardContent
              sx={{
                width: { xs: '100%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 2, md: 4 },
                height:'100vh'
              }}
            >
              <Box>
                <Typography variant="h5" gutterBottom>{mock.title}</Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  for <Link href="/products/small-engines" color="primary">ICE Powered Motorcycles/Scooters</Link>
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 1 }}>{mock.description}</Typography>

                <Box mt={2}>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                    <li>{mock.feature1}</li>
                    <li>{mock.feature2}</li>
                    <li>{mock.feature3}</li>
                    <li>{mock.feature4}</li>
                    <li>{mock.feature5}</li>
                  </ul>
                </Box>
              </Box>

              <Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Button variant="contained" color="primary" size="small" href="mailto:sales@sedemac.com">
                    Get in Touch
                  </Button>
                  <Typography color="text.secondary">{mock.date}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container> */}
        <Container>
          <Box display={'flex'} alignItems={'center'}>
            <ICEProductDetails mock={mock} type="ICE4" />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
