import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Appbar from '../../component/app-bar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Appbar title='Detail Produk' />
                <CardMedia
                    className={classes.media}
                    image=
                    'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/17/25837688/25837688_ddbcd449-9cb8-4a7a-a182-50bd8626d979_642_478.jpg'
                />
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <CardContent className={classes.content}>
                            <b className={classes.title}>
                                Ayam Potong
                            </b>
                            <span >
                                <b style={{
                                    color: '#C7C7C9',
                                    fontSize: '10px'
                                }}>
                                    /1kg
                                </b>
                            </span>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <ButtonGroup
                            size="small"
                            aria-label="Small outlined button group"
                            className={classes.btn}
                        >
                            <Button
                                style={{
                                    color: '#153b50',
                                    borderRadius: 4,
                                    minWidth: '40px',
                                    height: '30px'
                                }}
                            >
                                -
                            </Button>
                            <Button
                                style={{
                                    border: '0',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    minWidth: '40px',
                                    height: '30px'
                                }}
                            >
                                1
                            </Button>
                            <Button
                                style={{
                                    color: '#ffffff',
                                    backgroundColor: '#F15B5D',
                                    borderRadius: 4,
                                    minWidth: '40px',
                                    height: '30px'
                                }}
                            >
                                +
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div style={{ marginLeft: '1em' }}>
                    <Container component="main" maxWidth="xs" className={classes.container}>
                        <b style={{
                            fontSize: 12,
                            color: '#4E5356'
                        }}>
                            Deskripsi produk:
                    </b>
                        <Typography style={{
                            color: '#14181B',
                            fontSize: 11
                        }}>
                            Ayam yang di potong sendiri
                    </Typography>
                    </Container>
                </div>
            </Container>
        )
    }
}

export default Component