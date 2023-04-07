import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Line } from "react-chartjs-2";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

function HighValueChart() {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" 
          },
          title: {
            display: true,
            text: "Chart.js Line Chart"
          }
        }
      };
      
      const labels = ["January", "February", "March", "April", "May", "June", "July"];
      
      const data = {
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() => 800),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          }
        ]
      };
  return (
    <><Line options={options} data={data} /></>
  )
}

export default HighValueChart