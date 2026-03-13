import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AmitD from '../../../../assets/management/AmitD.jpg';
import ManishS from '../../../../assets/management/ManishS.jpg';
import ShashiS from '../../../../assets/management/ShashiS.jpg';
import Partha from '../../../../assets/management/partha.png';
import RajeshS from '../../../../assets/management/RajeshS.jpg';
import Udo from '../../../../assets/management/udo.png';
import Poyni from '../../../../assets/management/poyni.png';
import ManagementTeam from 'common/ManagementTeam';
import { Main } from 'layouts';
import Container from 'components/Container';
import { NoSsr } from '@mui/material';

const founders = [
  {
    name: 'Poyni Bhatt',
    title: 'Chairperson & Independent Director',
    avatar: Poyni,
    linkedin:
      'https://www.linkedin.com/in/poyni-bhatt-972b932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: '',
  },
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
    name: 'Namakal Srinivasan Parthasarathy',
    title: 'Independent Director',
    avatar: Partha,
    linkedin:
      'https://www.linkedin.com/in/nspartha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: '',
  },

  {
    name: 'Dr. Udo Wolz',
    title: 'Non-Executive  Director',
    avatar: Udo,
    linkedin:
      'https://www.linkedin.com/in/udowolz1417?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: '',
  },
];

const auditCommittee = [
  {
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin:
      'https://www.linkedin.com/in/poyni-bhatt-972b932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Chairperson',
  },
  {
    name: 'Namakal Srinivasan Parthasarathy',
    title: 'Non-Executive Independent Director',
    avatar: Partha,
    linkedin:
      'https://www.linkedin.com/in/nspartha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
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

const NominationCommittee = [
  {
    name: 'Namakal Srinivasan Parthasarathy',
    title: 'Non-Executive Independent Director',
    avatar: Partha,
    linkedin:
      'https://www.linkedin.com/in/nspartha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Chairman',
  },
  {
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin:
      'https://www.linkedin.com/in/poyni-bhatt-972b932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Member',
  },
  {
    name: 'Dr. Udo Wolz',
    title: 'Non-Executive  Director',
    avatar: Udo,
    linkedin:
      'https://www.linkedin.com/in/udowolz1417?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Member',
  },
];

const StakeholderCommittee = [
  {
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin:
      'https://www.linkedin.com/in/poyni-bhatt-972b932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
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
const RiskManagementCommittee = [
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
    linkedin:
      'https://www.linkedin.com/in/nspartha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Member',
  },

  {
    name: 'Dr. Udo Wolz',
    title: 'Non-Executive  Director',
    avatar: Udo,
    linkedin:
      'https://www.linkedin.com/in/udowolz1417?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Member',
  },
];
const CorporateSocialommittee = [
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
  {
    name: 'Poyni Bhatt',
    title: 'Non-Executive Independent Director',
    avatar: Poyni,
    linkedin:
      'https://www.linkedin.com/in/poyni-bhatt-972b932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    about: 'Member',
  },
];

const Founders = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Only vertical centering
        }}
        mt={0}
      >
        <Box
          marginTop={{ xs: 5, md: 5 }}
          justifyContent={'start'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Board Of Directors
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {founders.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
          <Box marginTop={7} display="flex" justifyContent="center">
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => {
                  const section = document.getElementById('Audit');
                  if (section) {
                    const isMobile = window.innerWidth < 600; // breakpoint

                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: isMobile ? 'start' : 'center',
                    });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Only vertical centering
        }}
        mt={0}
        // paddingY={{ xs: 3, md: 5 }}

        id="Audit"
      >
        <Box
          marginTop={{ xs: 8, md: 5 }}
          justifyContent={'start'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Audit Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {auditCommittee.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
        </Box>
        <Box marginTop={15} display="flex" justifyContent="center">
          <NoSsr>
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={{ xs: 30, sm: 40 }}
              height={{ xs: 30, sm: 40 }}
              onClick={() => {
                const section = document.getElementById('Nomination');
                if (section) {
                  const isMobile = window.innerWidth < 600; // breakpoint

                  section.scrollIntoView({
                    behavior: 'smooth',
                    block: isMobile ? 'start' : 'center',
                  });
                }
              }}
              sx={{ cursor: 'pointer' }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Box>
          </NoSsr>
        </Box>
      </Container>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Only vertical centering
        }}
        paddingY={{ xs: 10, md: 0 }}

        id="Nomination"
      >
        <Box marginTop={5} justifyContent={'center'} alignItems={'center'}>
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Nominations and Remunerations Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {NominationCommittee.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
          <Box marginTop={15} display="flex" justifyContent="center">
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => {
                  const section = document.getElementById('Stakeholder');
                  if (section) {
                    const isMobile = window.innerWidth < 600; // breakpoint

                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: isMobile ? 'start' : 'center',
                    });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Only vertical centering
        }}
        paddingY={{ xs: 10, md: 5 }}

        id="Stakeholder"
      >
        <Box marginTop={5} justifyContent={'start'} alignItems={'center'}>
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Stakeholder Relationship Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {StakeholderCommittee.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
          <Box marginTop={15} display="flex" justifyContent="center">
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => {
                  const section = document.getElementById('Risk-Management');
                  if (section) {
                    const isMobile = window.innerWidth < 600; // breakpoint

                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: isMobile ? 'start' : 'center',
                    });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Only vertical centering
        }}
        // paddingY={{ xs: 3, md: 5 }}

        id="Risk-Management"
      >
        <Box
          marginTop={{ xs: 10, md: 5 }}
          justifyContent={'start'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Risk Management Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {RiskManagementCommittee.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
          <Box marginTop={8} display="flex" justifyContent="center">
            <NoSsr>
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={{ xs: 30, sm: 40 }}
                height={{ xs: 30, sm: 40 }}
                onClick={() => {
                  const section = document.getElementById('Corporate-Social');
                  if (section) {
                    const isMobile = window.innerWidth < 600; // breakpoint

                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                sx={{ cursor: 'pointer' }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Box>
            </NoSsr>
          </Box>
        </Box>
      </Container>
      <Container
        minHeight="100vh"
        id="Corporate-Social"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // vertical center
          alignItems: 'center', // horizontal center
        }}
      >
        <Box
          marginTop={{ xs: 8, md: 5 }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            fontWeight={700}
            variant={'h4'}
            align={'center'}
            // marginTop={-3}
            marginBottom={2}
            color="#A03811"
          >
            Corporate Social Responsibility Committee
          </Typography>
        </Box>
        <Box marginBottom={0}>
          <Grid container spacing={2}>
            {CorporateSocialommittee.map((item, i) => (
              <ManagementTeam item={item} i={i} type="management" key={i} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default Founders;
