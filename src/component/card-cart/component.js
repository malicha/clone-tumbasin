import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import ButtonGroup from '@material-ui/core/ButtonGroup'
class Component extends React.Component {
    state = {
        count: 0
    }

    minus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    plus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { classes, cart } = this.props
        return (
            <Grid container spacing={0} className={classes.cardOrder}>
                <Grid item xs={3} className={classes.cardOrderItemLeft}>
                    <Grid container spacing={0}>
                        <Grid item xs>
                            <CardMedia className={classes.media} image={cart.image} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} className={classes.cardOrderItemCenter}>
                    <Grid container spacing={0}>
                        <Grid item xs>
                            <Typography className={classes.title}>
                                {cart.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.gridItemPrice}>
                        <Grid item xs className={classes.gridPrice}>
                            <Typography className={classes.price}>Rp. {cart.price}</Typography>
                            <Typography className={classes.unit}>
                                {cart.meta_data}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} className={classes.cardOrderItemRight}>
                    <Grid container spacing={0} className={classes.button}>
                        <Grid item xs>
                            <ButtonGroup
                                size="small"
                                aria-label="Small outlined button group"
                                className={classes.btn}
                            >
                                <Button className={classes.buttonMin} onClick={this.minus}>
                                    <Typography className={classes.textButton}>
                                        -
                                    </Typography>
                                </Button>
                                <Button className={classes.buttonCount}>
                                    <Typography className={classes.textButtonCount}>
                                        {this.state.count}
                                    </Typography>
                                </Button>
                                <Button className={classes.buttonPLus}
                                    onClick={this.plus}
                                    style={{ backgroundColor: '#F15B5D' }}>
                                    <Typography className={classes.textButton}>
                                        +
                                    </Typography>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default Component
