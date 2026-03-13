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
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    // linkedin: 'https://www.linkedin.com/in/anaykumar-joshi-3344075b/',
    about: 'Chairperson',
  },
  {
    name: 'Namakal Srinivasan Parthasarathy',
    title: 'Non-Executive Independent Director',
    avatar: Partha,
    // linkedin: 'https://www.linkedin.com/in/rai-nikhil/',
    about: 'Member',
  },
  {
    name: 'Shashikanth Suryanarayanan',
    title: 'Founder & Managing Director',
    avatar: ShashiS,
    linkedin:
      'https://www.linkedin.com/in/shashikanth-suryanarayanan-6ba85010/',
    about: 'Member',
  },
];

const AuditCommittee = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Box
          sx={{
            height: '20vh', // full viewport height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // vertical centering
            alignItems: 'center', // horizontal centering
            textAlign: 'center',
          }}
        >
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            // marginTop={-3}
            marginBottom={0}
          >
            Audit Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {founders.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default AuditCommittee;
