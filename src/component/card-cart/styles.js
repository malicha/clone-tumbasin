const styles = theme => ({
  card: {
    display: 'flex',
    height: 100,
    padding: 3,
    marginRight: 0,
    marginLeft: 0
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: 100,
    borderRadius: 5,
    margin: 10,
    height: 'cover'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#F15B5D',
    color: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    width: '-webkit-fill-available',
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    minWidth: '40px',
    fontWeight: 'bold'
  },
});

export default styles;
