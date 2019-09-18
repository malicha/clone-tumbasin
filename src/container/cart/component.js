import React from 'react'
import Appbar from '../../component/app-bar'
import Container from '@material-ui/core/Container'
import { CssBaseline } from '@material-ui/core';
import CardCart from '../../component/card-cart'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Keranjang Belanja' />
                <CssBaseline />
                <Paper className={classes.root}>
                    <Grid className={classes.listTitle}>
                        <strong style={{ color: '#14181B' }}>Total produk: 1</strong>
                        <b style={{ color: '#F15B5D' }}>Tambah lagi</b>
                    </Grid>
                    <div>
                        <CardCart />
                    </div>
                </Paper>
            </Container>
        )
    }
}
export default Component