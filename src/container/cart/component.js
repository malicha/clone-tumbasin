import React from 'react'
import Appbar from '../../component/app-bar'
import Container from '@material-ui/core/Container'
import { CssBaseline } from '@material-ui/core';
import CardCart from '../../component/card-cart'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Keranjang Belanja' />
                <CssBaseline />
                <Paper className={classes.root}>
                    <Grid container spacing={0} className={classes.order}>
                        <Grid item xs={6} className={classes.girdItemLeft}>
                            <b style={{
                                color: '#14181B',
                                fontSize: 12,
                                fontFamily: 'Montserrat, sans-serif'
                            }}>
                                Total produk: 1
                            </b>
                        </Grid>
                        <Grid item xs={6} className={classes.girdItemRight}>
                            <b style={{
                                color: '#F15B5D',
                                fontSize: 12,
                                fontFamily: 'Montserrat, sans-serif',

                            }}>
                                Tambah lagi
                            </b>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                </Paper>
            </Container>
        )
    }
}
export default Component

