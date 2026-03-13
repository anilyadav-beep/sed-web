import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart 
        series={[
          {
            name: 'Deployments',
            data: [0.1, 0.3, 1.6, 4.1, 9.2, 16.2, 24, 30, 32.5, 36.1, 36.6],
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
            width: 5,
            curve: 'smooth',
            //colors: '#A03811',
          },
          xaxis: {
            categories: [ '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020', '2021', '2022'],
          },
          title: {
            text: 'Smart Ignition Cumulative Deployment',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666'
            }
          },
          yaxis: [
            {
              seriesName: 'series-3',
              opposite: false,
              min: 0,
              max: 50,
              
              title: {
                text: 'Figures in Millions of Vehicles',
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