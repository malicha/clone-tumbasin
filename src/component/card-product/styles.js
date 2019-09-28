const styles = theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: 95,
    borderRadius: 4,
    height: 80,

  },
  price: {
    color: '#14181B',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    paddingRight: 5,

  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  name: {
    color: '#4E5356',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem'
  },
  cardOrder: {
    height: 100,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    borderBottom: '1px solid #F1F2F6'
  },
  gridItemPrice: {
    alignItem: 'flex-end',
    display: 'flex',
  },
  cardOrderItemRight: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: '3em',
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
    borderRadius: 4,
    fontWeight: 'bold',
    minWidth: '28px',
    height: '30px',
  },
  textButton: {
    marginTop: '-1px'
  },
  unit: {
    color: '#C7C7C9',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  },
  buttonCount: {
    minWidth: '30px',
    display: 'flex',
    justifyContent: 'center',
    border: 'none'

  },
  textButtonCount: {
    fontWeight: '800',
    fontSize: '12px',
    color: '#14181B',
    lineHeight: '14px',
    display: 'flex',
    justifyContent: 'center',

  },
  disc: {
    backgroundColor: '#F15B5D',
    width: 60,
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
  },
  gridPrice: {
    alignItem: 'flex-end',
    display: 'flex',

  },
  cardOrderItemCenter: {
    paddingLeft: 10
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '-webkit-fill-available',
    marginTop: 0,
    marginRight: '1em'
  },
  regularPrice: {
    textDecoration: 'line-through',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '#C7C7C9',
  },
  gridItemRegularPrice: {
    alignItem: 'center',
    display: 'flex',
  },
  gridItemName: {
    display: 'flex',
    alignItem: 'flex-start'

  }
});

export default styles;
