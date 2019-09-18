import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <img className={classes.media} src='https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/17/25837688/25837688_ddbcd449-9cb8-4a7a-a182-50bd8626d979_642_478.jpg' />
                </Grid>
                <Grid item xs={9}>
                    <Grid item xs={12} style={{ justifyContent: 'left', paddingBottom: '15px' }}>
                        <CardContent className={classes.content} style={{ padding: '12px' }}>
                            <Typography style={{ color: '#4E5356', fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                                Ayam Potong
                                </Typography>
                            <span >
                                <b style={{ color: '#14181B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>Rp 3.2000</b> <b style={{ color: '#C7C7C9', fontSize: '10px' }}>/1kg</b>
                            </span>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonGroup
                            size="small"
                            aria-label="Small outlined button group"
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '-webkit-fill-available',
                                marginTop: 0
                            }}
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
            </Grid>
        )
    }
}

export default Component
