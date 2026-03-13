import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import useAnalyticsEventTracker from '../../../../googleAnalytics/useAnalyticsEventTracker';
import Container from 'components/Container';
import { Card, CardContent, Grid } from '@mui/material';
import Ambience from '../AmbienceBaner';

const mock = [
  {
    label: 'Business Enquiries',
    value: 'sales@sedemac.com',
    link: 'mailto:sales@sedemac.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Suppliers',
    value: 'sourcing@sedemac.com',
    link: 'mailto:sourcing@sedemac.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Product Support',
    value: 'support@sedemac.com',
    link: 'mailto:support@sedemac.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Ethical Concerns',
    value: 'ethics@sedemac.com',
    link: 'mailto:ethics@sedemac.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Investor Grievance Redressal',
    value: 'cs@sedemac.com | Mr. Prasad Chavan | Company Secretary',
    link: 'mailto:cs@sedemac.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Technical & Corporate Center',
    value: 'Map Link: Pallod Farms, Baner Road, Baner, Pune 411 045, MH, IN.',
    link: 'https://goo.gl/maps/W3ZBZQSELzkCp3B67',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: 'Manufacturing Plant I',
    value:
      'Map Link: G-1, MIDC, Phase- III, Chakan Industrial Area Nighoje, Pune 410 501, MH, IN',
    link: 'https://goo.gl/maps/RRbETiHLiCd5Z3E4A',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: 'Manufacturing Plant II',
    value:
      'Map Link: Bhide Baug Industrial Estate, Narhe, Pune 411 041, MH, IN.',
    link: 'https://goo.gl/maps/tCoyG3kz8jsbxkp88',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: 'Registered Address',
    value:
      'Map Link: Survey No. 270/1/A/2, Pallod Farms, Baner Road, Baner, Baner Gaon, Haveli, Pune - 411045, Maharashtra, India',
    link: 'https://maps.app.goo.gl/KCSyXTj3mMitVMwP9',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Hero = () => {
  const theme = useTheme();
  const gaEventTracker = useAnalyticsEventTracker('Click-Contact');

  const LeftSide = () => (
    <Box spacing={1}>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={i < 4 ? 6 : 12} md={i < 4 ? 6 : 12} key={i}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: 1,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                borderRadius: 2,
                bgcolor: '#ffe3ccff',
                transition:
                  'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  width: 48,
                  height: 48,
                  marginRight: 2,
                }}
              >
                {item.icon}
              </Avatar>

              <CardContent sx={{ padding: 0, mt: 1 }}>
                <Link
                  href={item.link}
                  color="inherit"
                  underline="none"
                  onClick={() => gaEventTracker(item.label)}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.value}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const RightSide = () => <Ambience />;

  return (
    <Box sx={{ width: 1, height: 1, overflow: 'hidden', mt:{xs:-2, md: -10} }}>
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Box marginTop={0}>
          <Typography
            variant="h3"
              align={'center'}
              mb={2}
              sx={{
                fontWeight: 700,
                color: "#A03811",
              }}
          >
            Contact Details
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="stretch"
          sx={{ gap: { xs: 0, md: '5%' } }} // ← 5% space only on desktop
        >
          {/* ✅ Left Side (50%) */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '50%' },
              maxWidth: { xs: '100%', md: '50%' },
              pb:2
            }}
          >
            <LeftSide />
          </Box>

          {/* ✅ Right Side (45%) */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '45%' },
              maxWidth: { xs: '100%', md: '45%' },
              position: 'relative',
              minHeight: { xs: 300, md: 600 },
            }}
          >
            <RightSide />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
