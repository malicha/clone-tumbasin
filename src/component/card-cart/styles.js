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
    fontWeight: 'bold',

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
    height: 100,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    borderBottom: '1px solid #F1F2F6'
  },
  gridItemPrice: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: 40,
  },
  cardOrderItemRight: {
    alignItem: 'flex-end',
    display: 'flex',
    marginTop: '3em',
    paddingLeft: 15
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
    marginTop: '-3px'
  },
  unit: {
    color: '#C7C7C9',
    fontSize: '10px'
  },
  buttonCount: {
    minWidth: '30px',
  },
  textButtonCount: {
    fontWeight: '800',
    fontSize: '12px',
    color: '#14181B',
    lineHeight: '14px',
    display: 'flex',
    justifyContent: 'center',
  },
  gridPrice: {
    alignItem: 'flex-end',
    display: 'flex',
    marginBottom: 10
  },
  cardOrderItemCenter: {
    marginLeft: 10
  }
});

export default styles;
