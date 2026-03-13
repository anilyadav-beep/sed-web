import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart type='pie'
        series={[15, 7, 6, 4.5, 3.5, 2.1, 10]}
        options={{
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EDE8D1', '#DA6220', '#EFCECB'],  
          chart: {
            type: 'donut',
            width: 200,
          },         
          labels: ['Honda', 'Yamaha', 'Hero', 'Bajaj', 'TVS', 'Other: Suzuki, Royal Enfield', 'China: OEM'],
        }}   
      />
    </Box>
  );
};


export default chartOne;