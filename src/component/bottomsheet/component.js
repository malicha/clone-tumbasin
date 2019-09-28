import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import InfoIcon from '@material-ui/icons/Info'
import { IconButton } from '@material-ui/core';
class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={0}>
                <Box className={classes.bottomBox} >
                    <Grid container spacing={0} className={classes.gridItemTop}>
                        <Grid item xs={6} className={classes.gridItemLeft}>
                            <Typography className={classes.total}>
                                Total Pembayaran
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.gridItemRight}>
                            <Typography className={classes.price}>
                                Rp 45.000
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.gridItemTop}>
                        <Grid item xs={1}>
                            <Grid className={classes.icon}>
                                <InfoIcon />
                            </Grid>
                        </Grid>
                        <Grid item xs={11} className={classes.info}>
                            belum termasuk biaya antar
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        )
    }
}

export default Component