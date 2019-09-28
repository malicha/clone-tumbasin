import React from 'react'
import Appbar from '../../component/app-bar'
import Container from '@material-ui/core/Container'
import Product from '../../component/card-product'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import product from '../../data/index'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Keranjang Belanja' />
                <Box className={classes.box}>
                    <Grid container spacing={0} className={classes.order}>
                        <Grid item xs={6} className={classes.girdItemLeft}>
                            <Typography className={classes.itemLeft}>
                                Total produk:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.girdItemRight}>
                            <Typography className={classes.itemRight}>
                                Tambah lagi
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.gridCard}>
                        <Grid item xs>
                            {product.map(cart => {
                                return (
                                    <Product cart={cart} />
                                )
                            })}
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        )
    }
}
export default Component

