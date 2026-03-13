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
import Udo from '../../../../assets/management/udo.png';
import Poyni from '../../../../assets/management/poyni.png';
import Partha from '../../../../assets/management/partha.png';
import ManagementTeam from 'common/ManagementTeam';
import { Main } from 'layouts';
import Container from 'components/Container';

const founders = [
  {
    name: 'Manish Sharma',
    title: 'Founder, Whole Time Director & COO',
    avatar: ManishS,
    linkedin: 'https://www.linkedin.com/in/manish-sharma-a1b841aa/',
    about: 'Chairman',
  },
  {
    name: 'Shashikanth Suryanarayanan',
    title: 'Founder & Managing Director',
    avatar: ShashiS,
    linkedin:
      'https://www.linkedin.com/in/shashikanth-suryanarayanan-6ba85010/',
    about: 'Member',
  },
  {
    name: 'Amit Dixit',
    title: 'Founder & Joint Managing Director',
    avatar: AmitD,
    linkedin: 'https://www.linkedin.com/in/amit-dixit-733aabb/',
    about: 'Member',
  },
  {
    name: 'Rajesh Sheth',
    title: 'Chief Financial Officer',
    avatar: RajeshS,
    linkedin: 'https://www.linkedin.com/in/rai-nikhil/',
    about: 'Member',
  },
  {
    name: 'Namakal Srinivasan Parthasarathy',
    title: 'Non-Executive Independent Director',
    avatar: Partha,
    linkedin: 'https://www.linkedin.com/in/anaykumar-joshi-3344075b/',
    about: 'Member',
  },
  
  {
    name: 'Dr. Udo Wolz',
    title: 'Non-Executive  Director',
    avatar: Udo,
    linkedin: 'https://www.linkedin.com/in/rajesh-sheth-a19b8b20/',
    about: 'Member',
  },
];

const RiskManagementCommittee = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Box marginTop={0} justifyContent={'center'} alignItems={'center'}>
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
            marginTop={-3}
            marginBottom={2}
          >
            Risk Management Committee
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

export default RiskManagementCommittee;
