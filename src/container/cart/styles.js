const styles = theme => ({
  container: {
    marginTop: 48,
    marginBottom: 56,
    padding: 0
  },
  root: {
    padding: theme.spacing(3, 2),
    height: 600
  },
  girdItemRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  girdItemLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 448,
  },
  order: {
    padding: 15
  },
  itemLeft: {
    color: '#14181B',
    fontSize: 12,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
  },
  itemRight: {
    color: '#F15B5D',
    fontSize: 12,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
  }
});

export default styles;
