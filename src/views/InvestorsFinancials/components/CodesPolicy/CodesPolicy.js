import React from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Policy from '../../../../assets/brochures/privacy-policy-mobile-flash-v2.pdf';

const policies = [
  { name: 'Andriod Application Privacy Policy', link: Policy },
];

const CodesAndPolicies = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        mt={15}
        mb={2}
        sx={{ color: '#1e1e1e' }}
      >
        Codes & Policies
      </Typography>
      <Box
        display="grid"
        mb={15}
        gap={2} 
        sx={{
          backgroundColor: '#f1f1f1',
          borderRadius: 2,
          p: 5,
          color: '#fff',
          
        }}
      >
        <Box
          display="grid"
          gap={2} 
          gridTemplateColumns={{
            xs: '1fr', 
            sm: '1fr 1fr',
            md: '1fr 1fr',
          }}
        >
          {policies.map((info, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 2,
                p: 2,
                color: '#1e1e1e',
                boxShadow: 0,
                '&:hover': { transform: 'translateY(-4px)', borderColor:"#000080" , border:"1px solid blue"},
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                p={1}
                sx={{ color: '#1e1e1e' }}
              >
                {info.name}
              </Typography>
              <Button
                variant="contained"
                href={info.link}
                target="_blank"
                onClick={() => gaEventTracker('ISAAC-Contact')}
                sx={{
                  minWidth: '36px',
                  width: '36px',
                  height: '36px',
                  padding: 0,
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#e6e0e0',
                  },
                }}
              >
                <PictureAsPdfIcon sx={{ color: '#673ab7', flexShrink: 0 }} />
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CodesAndPolicies;
