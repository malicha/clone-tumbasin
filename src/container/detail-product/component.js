import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Appbar from '../../component/app-bar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Detail Produk' />
                <CardMedia
                    className={classes.media}
                    image="https://cdn2.tstatic.net/tribunnews/foto/bank/images/bayam_20150402_104741.jpg"
                />
                <Grid container spacing={0}>
                    <Grid className={classes.title} item xs>
                        <Typography style={{ color: '#4E5356' }}>
                            Sayur Bayam
                        </Typography>

                        <Typography style={{
                            color: '#C7C7C9',
                            fontWeight: 'bold'
                        }}
                        >/1ikat
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" className={classes.button}>
                            Tambahkan
                        </Button>
                    </Grid>
                </Grid>
                <div style={{ margin: '1em' }}>
                    <Typography style={{ color: '#4E5356' }}>Deskripsi produk: </Typography>
                    <Typography style={{ color: '#14181B' }}>Ini adalah sayur bayam segar di petik dari kebun sendiri</Typography>
                </div>
            </Container>
        )
    }
}

export default Component