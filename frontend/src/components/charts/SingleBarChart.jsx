import { Grid, Paper } from '@mui/material'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SingleBarChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Paper
      sx={{
        m: 1,
      }}
    >
      <Grid sm={12} style={{ height: '250px', width: "100vh" }}><Bar options={options} data={data} /></Grid>
    </Paper>
  )
}

export default SingleBarChart