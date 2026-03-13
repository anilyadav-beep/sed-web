import React, { useCallback, useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BOSCHAnnualReport from '../../../../assets/brochures/20230920-BOSCHAnnualReport.pdf';
import InfosysAnnualReport from '../../../../assets/brochures/20230920-InfosysAnnualReport.pdf';
import TeslaAnnualReport from '../../../../assets/brochures/20230920-TeslaAnnualReport.pdf';

export const mock = [
  {
    title: 'Audited Financials FY 2024',
    location: '...',
    year: '2024',
    team: '...',
    subtitle: 'Audited by BS & R',
    file: BOSCHAnnualReport
  },
  {
    title: 'Audited Financials FY 2023',
    location: '...',
    year: '2023',
    team: '...',
    subtitle: 'Audited by BS & R',
    file: InfosysAnnualReport
  },
  {
    title: 'Audited Financials FY 2022',
    location: '...',
    year: '2022',
    team: '...',
    subtitle: 'Audited by BS & R',
    file: TeslaAnnualReport
  },
];

const InvestorDetails = () => {
  const theme = useTheme();
  const [selectedYear, setSelectedYear] = useState('');
  // const gaEventTracker = useMemo((fileUrl) => {
  //   window.open(fileUrl, '_blank');
  // },[]);
  const gaEventTracker =(fileUrl) => {
    window.open(fileUrl, '_blank');
  };
  const handleChange = useCallback((event) => {
    setSelectedYear(event.target.value);
  },[]);
  const filteredData = selectedYear && selectedYear !== ""
    ? mock.filter(item => item.year === selectedYear)
    : mock;
  return (
    <Box>
      <Box padding={5}>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          {'Statutory Disclosures'}
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          '.MuiOutlinedInput-root': {
            background: theme.palette.background.paper,
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" color='info' sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">Financial Year</InputLabel>
            <Select labelId="career-listing__jobs-role--label" label="Financial Year" onChange={handleChange}>
              <MenuItem value="">
                All
              </MenuItem>
              <MenuItem value={'2025'}>2025</MenuItem>
              <MenuItem value={'2024'}>2024</MenuItem>
              <MenuItem value={'2023'}>2023</MenuItem>
              <MenuItem value={'2022'}>2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" color='info' sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">Type Of Document</InputLabel>
            <Select labelId="career-listing__jobs-role--label" label="Type Of Document">
              <MenuItem value={'consumer'}>Annual Report</MenuItem>
              <MenuItem value={'consulting'}>Quarterly Report</MenuItem>
              <MenuItem value={'internal-tools'}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
          marginTop: 5
        }}
      >
        {filteredData.map((item, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={2} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>
                  {`${item.team} / ${item.location}`}
                </Typography>
              </Box>
              <Box sx={{width: "10%"}}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  // onClick={() =>}
                >
                  Coming Soon
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InvestorDetails;