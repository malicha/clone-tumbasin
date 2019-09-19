const styles = theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: 85,
    borderRadius: 5,
    height: 80,
  },
  price: {
    color: '#14181B',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '-webkit-fill-available',
  },
  title: {
    color: '#4E5356',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem'
  },
  cardOrder: {
    borderBottom: '1px solid #F1F2F6',
    height: 100
  },
  gridItemPrice: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: 40
  },
  cardOrderItemRight: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: '3.5em'
  }
});

export default styles;
