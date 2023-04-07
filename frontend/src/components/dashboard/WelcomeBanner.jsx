import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import dashboard from '../../imgs/dashboard.png'

function WelcomeBanner() {
    return (
        <Paper
            sx={{
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
            }}
            style={{ backgroundColor: '#7FFFD4' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom style={{ margin:'10px' , fontWeight : 700, textAlign : 'center'}}>
                            Welcome to your Dashboard
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom style={{ marginLeft:'10px' , textAlign : 'left'}}>
                            Try our new Admin Dashboard Template. build with live Ant-Design
                            components. Customize it to your needs and release to production!
                        </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={dashboard} width={240} height={200}/>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default WelcomeBanner