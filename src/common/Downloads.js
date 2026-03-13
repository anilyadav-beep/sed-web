import React, { useCallback, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BOSCHAnnualReport from '../assets/brochures/20230920-BOSCHAnnualReport.pdf';
import InfosysAnnualReport from '../assets/brochures/20230920-InfosysAnnualReport.pdf';
import TeslaAnnualReport from '../assets/brochures/20230920-TeslaAnnualReport.pdf';
import Container from 'components/Container';
import { Main } from 'layouts';

export const mock = [
  {
    title: 'Financial Data',
    location: 'Zip File',
    year: '2025',
    team: '25-April-2025 / 12-noon ',
    subtitle: 'MIS | Annual Reports | Cap-Table',
    file: BOSCHAnnualReport,
  },
  {
    title: 'Brand Kit',
    location: 'Zip File',
    year: '2024',
    team: '25-April-2025 / 12-noon ',
    subtitle: 'Promoters | KMP | SMP | Logos | Applications | Facilities | More',
    file: InfosysAnnualReport,
  },
  {
    title: 'Strategy | IRL ',
    location: 'Zip File',
    year: '2023',
    team: '25-April-2025 / 12-noon ',
    subtitle: 'GTM | Traction | Historical Analysis | Anchor Customers  More',
    file: TeslaAnnualReport,
  },
];

const Downloads = () => {
  const theme = useTheme();
  const [selectedYear, setSelectedYear] = useState('');
  const handleChange = useCallback((event) => {
    setSelectedYear(event.target.value);
  }, []);
  const filteredData =
    selectedYear && selectedYear !== ''
      ? mock.filter((item) => item.year === selectedYear)
      : mock;
  return (
    <Main>
      <Container>
        <Box>
          <Box padding={5}>
            <Typography fontWeight={700} variant={'h4'} align={'center'}>
              {'Key Downloads'}
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
            <Grid item xs={12} md={12}>
              <FormControl variant="outlined" color="info" sx={{ minWidth: 1 }}>
                <InputLabel id="career-listing__jobs-role--label">
                  User Class
                </InputLabel>
                <Select
                  labelId="career-listing__jobs-role--label"
                  label="Financial Year"
                  onChange={handleChange}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value={'2025'}>Financial Professional</MenuItem>
                  <MenuItem value={'2024'}>Designer</MenuItem>
                  <MenuItem value={'2023'}>Decision Maker</MenuItem>
                 
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              background: theme.palette.background.paper,
              borderRadius: 2,
              marginTop: 5,
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
                  <Box sx={{ width: '10%' }}>
                    <Button
                      component="a"
                      href={item.file}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      size="small">
                        Download
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default Downloads;
