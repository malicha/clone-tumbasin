import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Appbar from '../../component/app-bar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Detail Produk' />
                <Grid container spacing={0} >
                    <Grid item xs className={classes.gridMedia}>
                        <CardMedia
                            className={classes.media}
                            image=
                            'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/17/25837688/25837688_ddbcd449-9cb8-4a7a-a182-50bd8626d979_642_478.jpg'
                        />
                    </Grid>
                    <Grid container spacing={0} className={classes.gridContent}>
                        <Grid item xs={6} className={classes.gridItemLeft}>
                            <Typography className={classes.title}>Ayam Potong</Typography>
                            <Typography className={classes.unit}>/1kg</Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.gridButton}>
                            <ButtonGroup
                                size="small"
                                aria-label="Small outlined button group"
                                className={classes.btn}
                            >
                                <Button className={classes.buttonMin}>-</Button>
                                <Button className={classes.count}>1</Button>
                                <Button className={classes.buttonPlus}
                                    style={{
                                        backgroundColor: '#F15B5D'
                                    }}>
                                    +
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs className={classes.gridPrice}>
                            <Typography style={{ color: '#4E5356' }}>Harga: </Typography>
                            <Typography style={{
                                color: '#14181B',
                                fontWeight: 'bold'
                            }}>Rp. 5000 </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.gridDeskrip}>
                        <Grid item xs>
                            <Typography className={classes.deskrip}>Deskripsi produk:</Typography>
                            <Typography style={{
                                color: '#14181B',
                                fontSize: 11
                            }}>
                                -
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        )
    }
}

export default Component