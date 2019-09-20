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
    fontSize: '12px',
    fontWeight: 'bold'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#4E5356',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem'
  },
  cardOrder: {
    borderBottom: '1px solid #F1F2F6',
    height: 100,
    paddingTop: 13,
    paddingBottom: 10
  },
  gridItemPrice: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: 40,
  },
  cardOrderItemRight: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: '3em'
  },
  buttonMin: {
    color: '#153b50',
    fontWeight: 'bold',
    borderRadius: 3,
    minWidth: '28px',
    height: '30px',
    border: '1px solid #E5E5E5',
    backgroundColor: '#ffffff',

  },
  buttonPLus: {
    color: '#ffffff',
    backgroundColor: '#F15B5D',
    borderRadius: 4,
    fontWeight: 'bold',
    minWidth: '28px',
    height: '30px',
    hover: 'none'
  },
  textButton: {
    marginTop: '-3px'
  },
  unit: {
    color: '#C7C7C9',
    fontSize: '10px'
  }
});

export default styles;
