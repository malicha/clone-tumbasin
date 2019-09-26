import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core';
class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Box
                className={classes.gridBottom}
                backgroundColor='#FFFFFF'
                position='fixed'
                display='flex'
                justifyContent='center'
            >
                <div className={classes.bottom}>
                    <Paper className={classes.root}>
                        <Grid container spacing={0}>
                            <Typography>Total Pembayaran</Typography>
                            <Typography>Rp. 45.000</Typography>
                        </Grid>
                    </Paper>
                </div>
            </Box>
        )
    }
}

export default Component
