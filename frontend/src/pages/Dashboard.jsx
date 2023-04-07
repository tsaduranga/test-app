import { Container, Grid } from '@mui/material'
import React from 'react'
import WelcomeBanner from '../components/dashboard/WelcomeBanner'
import LastMonthChartSpace from '../components/dashboard/LastMonthChartSpace'
import PiChart from '../components/charts/PiChart'
import SingleBarChart from '../components/charts/SingleBarChart'
import ValuesShowCommonChart from '../components/charts/ValuesShowCommonChart'
import { HIGH, LOW, OPEN } from '../constant'

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} >

          <Grid item xs={12}>
            <WelcomeBanner />
          </Grid>

          <Grid item xs={12} style={{ display: 'flex' }} spacing={2}>
            <Grid item md={6} xm={12}>
              <ValuesShowCommonChart  type={HIGH}/>
            </Grid>
            <Grid item md={6} xm={12}>
              <ValuesShowCommonChart type={LOW} />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <LastMonthChartSpace />
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} >
          <Grid item xs={12}>
            <SingleBarChart />
          </Grid>
          <Grid item xs={12}>
            <ValuesShowCommonChart type={OPEN} />
          </Grid>
          <Grid item xs={12}>
            <PiChart />
          </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Dashboard