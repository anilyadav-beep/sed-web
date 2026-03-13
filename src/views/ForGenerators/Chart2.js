import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart type='pie'
        series={[39200, 25200, 27600, 7800, 44800]}
        options={{
          
          chart: {
            type: 'donut',
            width: 200,
          },  
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EFCECB', '#FFF4EA'],         
          labels: ['KOEL', 'Cummins', 'Mahindra Powerol', 'Ashok Leyland', 'Others'],
        }}   
      />
    </Box>
  );
};


export default chartOne;