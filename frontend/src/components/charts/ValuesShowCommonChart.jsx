import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import highImg from '../../imgs/highImg.JPG'
import lowImg from '../../imgs/lowImg.JPG'
import openImg from '../../imgs/openImg.JPG'
import { HIGH, LOW, OPEN } from '../../constant'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

const ValuesShowCommonChart = ({type}) => {

  const stock = useSelector((state) => state.stock)
  const { loading, error, data } = stock

  return (
    <Paper
    sx={{
      m: 1,
      p : 2,
      display: 'flex',
      flexDirection: 'column',
      height: 240,
    }}
  >
    <Grid container>
        <Grid md={6}>
            <Typography variant="p" gutterBottom>{type}</Typography>
            <Typography  variant="h5" gutterBottom style={{ fontWeight : 'bold'}}>
              {
                loading ? <Loading /> : ((type === HIGH) ? data?.high : (type === LOW) ? data?.low : (type === OPEN) ? data?.open : '')
              }
              
            </Typography>

        </Grid>
        <Grid md={6}>
            <img src={ (type === HIGH) ? highImg : (type === LOW) ? lowImg : (type === OPEN) ? openImg : '' } width="150" height="220" />
        </Grid>
    </Grid>
  </Paper>
  )
}

export default ValuesShowCommonChart