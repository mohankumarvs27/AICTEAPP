import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['A', 'B', 'C', 'D', 'E' , 'F' , 'G', 'H' , 'I' , 'J']
      },
      series: [44, 55, 41, 17, 15, 23, 43, 22, 12, 23]

    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;
