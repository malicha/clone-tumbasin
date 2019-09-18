import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {
  render() {
    const { classes, top } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={top.image}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {top.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {top.regular_price}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {top.price}
            </Typography>
          </CardContent>
        </div>
        {/* <div className={classes.btn}>
          {item && item.qty > 0 ? (
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
                {item.qty || 0}
              </Button>
              <Button
                onClick={event => {
                  event.preventDefault();
                  this.increase();
                  this.props.addItem(product);
                }}
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
          ) : (
              <Button
                onClick={event => {
                  event.preventDefault();
                  this.increase();
                  this.props.addItem(product);
                }}
                style={{
                  color: '#ffffff',
                  backgroundColor: '#F15B5D',
                  borderRadius: 8,
                  justifyContent: 'center',
                  width: '-webkit-fill-available',
                  marginTop: 8,
                  marginRight: 8,
                  marginLeft: 8,
                  minWidth: '40px'
                }}
              >
                Tambahkan
              </Button>
            )}
        </div> */}
      </Card>
    );
  }
}

export default Component;
