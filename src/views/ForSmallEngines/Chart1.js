import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart type='bar'
        series={[{
          name: 'Hero',
          data:  [6.6, 7.5, 7.8, 6.2, 5.7, 4.9],
        },
        {
          name: 'Bajaj',
          data:  [3.1, 3.2, 4.1, 3.7, 3.5, 3.5],
        },
        {
          name: 'TVS',
          data:  [2.8, 3.3, 3.7, 3.0, 2.9, 3.0],
        },
        {
          name: 'Honda',
          data:  [5.0, 6.1, 5.9, 5.0, 4.0, 3.8],
        },
        {
          name: 'Suzuki',
          data:  [0.4, 0.5, 0.7, 0.7, 0.5, 0.7],
        },
        {
          name: 'Others',
          data:  [1.7, 1.9, 1.9, 1.6, 1.4, 1.7],
        }
        ]}
        options={{
          chart: {
            stacked: true,
          },
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EDE8D1', '#DA6220', '#EFCECB'],  
          dataLabels: {
            enabled: false
          },         
          stroke: {
            width: 2,
            curve: 'smooth',
          },
          xaxis: {
            //type: 'datetime',
            categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
          },
          title: {
            text: 'Millions of ICE 2W - India',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666'
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 0
            },
          },
        }}   
      />
    </Box>
  );
};


export default chartOne;