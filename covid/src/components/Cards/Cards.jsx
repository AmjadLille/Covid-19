import React from 'react'
import {Card, Typography , CardContent , Grid} from '@material-ui/core'
import style from './Cards.module.css'

const Cards = (props) => {
    console.log(props)
    return(
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5">Real data</Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">Real data</Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h5">Real data</Typography>
                        <Typography color="textSecondary">Real date</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19.</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards