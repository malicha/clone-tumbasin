import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CardMedia from '@material-ui/core/CardMedia'

class Component extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <Grid container spacing={0}>
                    <Grid item xs>
                        <img className={classes.media} src='https://cdn2.tstatic.net/tribunnews/foto/bank/images/bayam_20150402_104741.jpg' />
                    </Grid>
                    <Grid item xs>
                        <CardContent className={classes.content}>
                            <Typography style={{ color: '#4E5356' }}>
                                Sayur Bayam
                                </Typography>
                            <span >
                                <b style={{ color: '#14181B' }}>Rp 7.500</b> <b style={{ color: '#C7C7C9' }}>/1ikat</b>
                            </span>
                        </CardContent>
                    </Grid>
                    <Grid item xs style={{ alignItem: 'center' }}>
                        <ButtonGroup
                            size="small"
                            aria-label="Small outlined button group"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '-webkit-fill-available',
                                marginTop: 8
                            }}
                        >
                            <Button
                                style={{
                                    color: '#153b50',
                                    borderRadius: 4,
                                    minWidth: '40px'
                                }}
                            >
                                -
                            </Button>
                            <Button
                                style={{
                                    border: '0',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    minWidth: '40px'
                                }}
                            >
                                1
                            </Button>
                            <Button
                                style={{
                                    color: '#ffffff',
                                    backgroundColor: '#F15B5D',
                                    borderRadius: 4,
                                    minWidth: '40px'
                                }}
                            >
                                +
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

export default Component
