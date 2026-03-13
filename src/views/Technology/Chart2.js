import React from 'react';
import Box from '@mui/material/Box';
import Chart from 'react-apexcharts';

const chartOne = () => {

  return (
    <Box>
      <Chart 
        series={[
        // {
        //   name: 'SomeNumbers',
        //   data:  [ 46, 257, 1296, 2523, 5158, 6955, 7858, 5955, 2449, 3605, 558],
        //   type: 'column',
        //   strokeColor: '#A03811'
        // },
          // {
          //   name: 'SomePercent',
          //   data: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ],
          //   type: 'column',
          // },
          {
            name: 'Deployments',
            data: [12, 29, 69, 140, 207, 291, 380, 515, 683],
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
            categories: [ '2014', '2015', '2016', '2017', '2018', '2019','2020', '2021', '2022'],
          },
          title: {
            text: 'Genset Controller Deployment',
            align: 'left',
            style: {
              fontSize: '16px',
              color: '#666'
            }
          },
          // fill: {
          //   colors: ['#A03811']
          // },
         
          yaxis: [
            // {
            //   min: 0,
            //   max: 10000,
            //   title: {
            //     text: 'Annual Deployments (000s)',
            //   },
            //   tooltip: {
            //     enabled: false
            //   }
            // },
            // {
            //   seriesName: 'series-2',
            //   opposite: true,
            //   min: 0,
            //   max: 100,
              
            //   title: {
            //     text: 'Market Share in India %',
            //     style: {
            //       color: '#666',
            //     }
            //   },
            //   tooltip: {
            //     enabled: false
            //   }
            // },
            {
              seriesName: 'series-3',
              opposite: false,
              min: 0,
              max: 800,
              
              title: {
                text: 'Thousands of Generators',
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