import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart type='pie'
        series={[0.2, 30, 5]}
        options={{
          chart: {
            type: 'donut',
            width: 400,
          }, 
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EFCECB'],     
          labels: ['India', 'China', 'Europe'],
        }}   
      />
    </Box>
  );
};


export default chartOne;