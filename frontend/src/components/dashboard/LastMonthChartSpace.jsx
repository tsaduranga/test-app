import { Paper } from '@mui/material'
import React from 'react'
import VerticalBarChart from '../charts/VerticalBarChart'

const LastMonthChartSpace = () => {
  return (
    <Paper
      sx={{
        m: 1,
      }}
    >
      <VerticalBarChart />
    </Paper>
  )
}

export default LastMonthChartSpace