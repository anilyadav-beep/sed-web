import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AmitD from '../../../../assets/management/AmitD.jpg';
import ManishS from '../../../../assets/management/ManishS.jpg';
import ShashiS from '../../../../assets/management/ShashiS.jpg';
import RajeshS from '../../../../assets/management/RajeshS.jpg';
import AnayJ from '../../../../assets/management/AnayJ.jpg';
import NikhilR from '../../../../assets/management/NikhilR.jpg';
import ManagementTeam from 'common/ManagementTeam';
import { Main } from 'layouts';
import Container from 'components/Container';

const founders = [
  {
    name: 'Shashikanth Suryanarayanan',
    title: 'Founder & Managing Director',
    avatar: ShashiS,
    linkedin:
      'https://www.linkedin.com/in/shashikanth-suryanarayanan-6ba85010/',
    // about: 'Ph.D. in Controls; University of California, Berkeley.',
  },
  {
    name: 'Amit Dixit',
    title: 'Founder & Joint Managing Director',
    avatar: AmitD,
    linkedin: 'https://www.linkedin.com/in/amit-dixit-733aabb/',
    // about: 'Ph.D. in Controls; IIT-Bombay.',
  },
  {
    name: 'Manish Sharma',
    title: 'Founder, Whole Time Director & COO',
    avatar: ManishS,
    linkedin: 'https://www.linkedin.com/in/manish-sharma-a1b841aa/',
    // about: 'Masters; IIT-Bombay.',
  },
  {
    name: 'Anay Joshi',
    title: 'Chief Technology Officer',
    avatar: AnayJ,
    linkedin: 'https://www.linkedin.com/in/anaykumar-joshi-3344075b/',
    about: '',
  },
  {
    name: 'Nikhil Rai',
    title: 'Senior Vice President, Sales & BD',
    avatar: NikhilR,
    linkedin: 'https://www.linkedin.com/in/rai-nikhil/',
    about: '',
  },
  {
    name: 'Rajesh Sheth',
    title: 'Chief Financial Officer',
    avatar: RajeshS,
    linkedin: 'https://www.linkedin.com/in/rajesh-sheth-a19b8b20/',
    about: '',
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Box
          // minHeight={'20vh'}
          // display={'flex'}
          // alignItems={'start'}
        >
          {/* <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
          >
            SEDEMAC
          </Typography> */}
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginBottom={2}
            color="#A03811"
          >
            Management Team
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {founders.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
        </Box>
        {/* <Box marginBottom={4}>
        <Grid container spacing={2}>
          {mgmt.map((item, i) => (
            <ManagementTeam item={item} i={i} />
          ))}
        </Grid>
      </Box> */}
      </Container>
    </Main>
  );
};

export default Team;
