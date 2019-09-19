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
    justifyContent: 'flex-start'
  },
  paper: {
    bottom: 0,
    color: 'red',
    height: 70,
    padding: theme.spacing(3, 2),
  }


});

export default styles;
