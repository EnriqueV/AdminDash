import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

 
class DoughnutExample extends Component{

  render() {
    return (
      <div>
        <h4>Doughnut Example</h4>
        <Doughnut data={data} />
      </div>
    );
  }
};
export default DoughnutExample;