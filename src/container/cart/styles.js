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
    paddingTop: 15,
  }
});

export default styles;
