import React from 'react'
import Appbar from '../../component/app-bar'
import Container from '@material-ui/core/Container'
import CardCart from '../../component/card-cart'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
                            <Typography style={{
                                color: '#14181B',
                                fontSize: 12,
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'bold',
                            }}>
                                Total produk: 1
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.girdItemRight}>
                            <Typography style={{
                                color: '#F15B5D',
                                fontSize: 12,
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 'bold',
                            }}>
                                Tambah lagi
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                    <Grid container spacing={0} style={{ paddingTop: 13 }}>
                        <CardCart />
                    </Grid>
                </Box>
            </Container>
        )
    }
}
export default Component

