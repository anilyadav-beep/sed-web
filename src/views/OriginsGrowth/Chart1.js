import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart 
        series={[{
          name: 'Revenue (Crs)',
          data:  [ 201, 240, 283, 419, 529, 657],
          type: 'bar',
        },
        {
          name: 'EBITDA (Crs)',
          data: [ 10, 31, 32, 49, 77, 111],
          type: 'line',
        }
        ]}
        options={{
          chart: {
            type: 'line',
            height: 400,
            stacked: false,
          }, 
          colors: ['#372A28', '#A03811', '#946C0A', '#FFD964', '#EFCECB'],        
          forecastDataPoints: {
            count: 0
          },
          stroke: {
            width: 3,
            curve: 'smooth',
            //color: '#A03811',
          },
          xaxis: {
            categories: ['FY: 2019-20', 'FY: 2020-21', 'FY: 2021-22', 'FY: 2022-23', 'FY 2022-23', 'FY 2023-24', 'FY 2024-25'],
          },
          title: {
            text: 'Growth over Years',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666'
            }
          },         
          yaxis: [
            {
              min: 0,
              max: 800,
              forceNiceScale: true,
              title: {
                text: 'Revenue (Crs)',
              },
              tooltip: {
                enabled: false
              }
            },
            {
              seriesName: 'series-2',
              opposite: true,
              min: 0,
              max: 150,
              forceNiceScale: true,
              
              title: {
                text: 'EBITDA (Crs)',
                style: {
                  color: '#666',
                }
              },
              tooltip: {
                enabled: false
              }
            },
          ]}}   
      />
    </Box>
  );
};


export default chartOne;