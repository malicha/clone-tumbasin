import React from 'react'
import Appbar from '../../component/app-bar'
import Container from '@material-ui/core/Container'
import CardCart from '../../component/card-cart'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import data from '../../data/index'
import Divider from '@material-ui/core/Divider'

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
                        <Grid item xs={12} style={{ paddingLeft: 14, paddingRight: 14 }}>
                            {data.map(cart => {
                                return (
                                    <CardCart cart={cart} />
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

