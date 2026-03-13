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
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin: 'https://www.linkedin.com/in/rai-nikhil/',
    about: 'Chairperson',
  },
  {
    name: 'Manish Sharma',
    title: 'Founder, Whole Time Director & COO',
    avatar: ManishS,
    linkedin: 'https://www.linkedin.com/in/manish-sharma-a1b841aa/',
    about: 'Member',
  },
  {
    name: 'Amit Dixit',
    title: 'Founder & Joint Managing Director',
    avatar: AmitD,
    linkedin: 'https://www.linkedin.com/in/amit-dixit-733aabb/',
    about: 'Member',
  },
];

const StakeholderCommittee = () => {
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
            // marginBottom={2}
          >
            Stakeholder Relationship Committee
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

export default StakeholderCommittee;
