import { Box, Grid } from '@mui/material';
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Donut from './Donut'

class ChartUpdate extends Component {

  constructor(props) {
    super(props);

    

    this.state = {
      optionsMixedChart: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'arrow'
          }
        },
        stroke: {
          width: [4, 0, 0],
        },
        xaxis: {
          categories: ['2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2020-2021']
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100
        }
      },
      seriesMixedChart: [{
        name: 'Placement',
        type: 'column',
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      }, {
        name: 'Students Passed',
        type: 'column',
        data: [23, 12, 54, 61, 32, 56, 81, 19]
      }, {
        name: 'Enrollment',
        type: 'column',
        data: [62, 12, 45, 55, 76, 41, 23, 43]
      },{
        name: 'Intake',
        type: 'column',
        data: [52, 14, 40, 52, 73, 48, 28, 48]
      }],
      
        
      
    }
  }



  render() {

    return (
      <div className="app">
        <Grid>
        
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <div className="d-flex justify-content-around">
          <div>
          <Grid item xs={12} md={6}>
          <Donut/>
          </Grid>
          </div>
          <Grid item xs={12} md={6}>
          <div className="col mixed-chart">
            <Chart options={this.state.optionsMixedChart} series={this.state.seriesMixedChart} type="line" width="500" />
          </div>
          </Grid>
          
        </div>

        </Box>
        
        </Grid>
      </div>
    );
  }
}

export default ChartUpdate;
