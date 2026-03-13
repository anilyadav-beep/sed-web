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
import Poyni from '../../../../assets/management/poyni.png';
import ManagementTeam from 'common/ManagementTeam';
import { Main } from 'layouts';
import Container from 'components/Container';

const founders = [
  {
    name: 'Amit Dixit',
    title: 'Founder & Joint Managing Director',
    avatar: AmitD,
    linkedin: 'https://www.linkedin.com/in/amit-dixit-733aabb/',
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
    name: 'Manish Sharma',
    title: 'Founder, Whole Time Director & COO',
    avatar: ManishS,
    linkedin: 'https://www.linkedin.com/in/manish-sharma-a1b841aa/',
    about: 'Member',
  },
  // {
  //   name: 'Namakal Srinivasan Parthasarathy',
  //   title: 'Independent Director',
  //   // avatar: AnayJ,
  //   linkedin: 'https://www.linkedin.com/in/anaykumar-joshi-3344075b/',
  //   about: '',
  // },
  {
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin: 'https://www.linkedin.com/in/rai-nikhil/',
    about: 'Member',
  },
  // {
  //   name: 'Dr. Udo Wolz',
  //   title: 'Non-Executive  Director',
  //   // avatar: RajeshS,
  //   linkedin: 'https://www.linkedin.com/in/rajesh-sheth-a19b8b20/',
  //   about: '',
  // },
];

const CorporateSocialommittee = () => {
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
           Corporate Social Responsibility Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
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

export default CorporateSocialommittee;
