import React from 'react';
import AmitD from '../../../../assets/management/AmitD.jpg';
import ManishS from '../../../../assets/management/ManishS.jpg';
import ShashiS from '../../../../assets/management/ShashiS.jpg';
import RajeshS from '../../../../assets/management/RajeshS.jpg';
import AnayJ from '../../../../assets/management/AnayJ.jpg';
import NikhilR from '../../../../assets/management/NikhilR.jpg';
import { Main } from 'layouts';
import { Box, Card, Container, Typography } from '@mui/material';
import TeamIcon from '@mui/icons-material/Groups';
import Founder from '@mui/icons-material/Person';
import CommitteeTeam from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Audit Committee',
    icon: <TeamIcon fontSize="large" sx={{ color: '#A03811' }} />,
    link:'/more/about-us/committee/audit-committee'
  },
  {
    title: 'Nomination and Remuneration Committee',
    icon: <Founder fontSize="large" sx={{ color: '#A03811' }} />,
    link:'/more/about-us/committee/nomination-committee',
  },
  {
    title: 'Stakeholder Relationship Committee',
    icon: <CommitteeTeam fontSize="large" sx={{ color: '#A03811' }} />,
    link:'/more/about-us/committee/stakeholder-committee',
  },
  {
    title: 'Risk Management Committee',
    icon: <CommitteeTeam fontSize="large" sx={{ color: '#A03811' }} />,
    link:'/more/about-us/committee/risk-management-committee',
  },
  {
    title: 'Corporate Social Responsibility Committee',
    icon: <CommitteeTeam fontSize="large" sx={{ color: '#A03811' }} />,
    link:'/more/about-us/committee/corporate-social-committee',
  },
];

const Committee = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Container>
        <Box
          sx={{
            minHeight: '80vh', // centers vertically
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', // centers horizontally
                alignItems: 'center',
                gap: 5,
              }}
            >
              {cards.map((item, index) => (
                <Card
                  key={index}
                  onClick={() => navigate(item.link)}
                  sx={{
                    flex: '0 1 calc(20% - 32px)', // 5 per row
                    maxWidth: 'calc(19% - 32px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200,
                    borderRadius: 4,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    backgroundColor: '#ffe3ccff',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                    transition:
                      'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{ mt: 1, fontWeight: 'bold', color: 'text.primary' }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </Container>
    </Main>
  );
};

export default Committee;
