import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart type='pie'
        series={[600, 150, 800, 200, 150]}
        options={{
          
          chart: {
            type: 'donut',
            width: 200,
          },    
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EFCECB', '#FFF4EA'],       
          labels: ['China', 'India', 'USA', 'Europe', 'Others'],
        }}   
      />
    </Box>
  );
};


export default chartOne;