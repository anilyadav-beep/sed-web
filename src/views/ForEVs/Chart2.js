import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const ChartTwo = () => {

  return (
    <Box>
      <Chart 
        series={[{
          name: 'India e2W',
          data:  [20, 23, 54, 126, 152, 143, 231],
        },
        ]}
        options={{
          chart: {
            type: 'line',
            height: 300,
          },
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EFCECB'],
          forecastDataPoints: {
            count: 0
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2015', '2016','2017' ,'2018' ,'2019', '2020', '2021', '2022'],
            tickAmount: 7,
            // labels: {
            //   formatter: function(value, timestamp, opts) {
            //     return opts.dateFormatter(new Date(timestamp), 'dd MMM');
            //   }
            // }
          },
          title: {
            text: 'India Sales in (`000)',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666'
            }
          },
          yaxis: {
            min: 0,
            max: 300,
            forceNiceScale: true,
          }}}   
      />
    </Box>
  );
};


export default ChartTwo;