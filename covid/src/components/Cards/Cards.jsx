import React from 'react'
import { Card, Typography, CardContent, Grid } from '@material-ui/core'
import style from './Cards.module.css'
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return <p>Looding</p>
    }
    return (
        <div className={style.container}>
            <Grid container spacing={4} justify="center">
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19.</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards