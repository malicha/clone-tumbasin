const styles = theme => ({
  container: {
    marginTop: 48,
    marginBottom: 56,
    padding: 0
  },
  box: {
    marginTop: 8,
    padding: 4
  },
  paper: {
    borderRadius: 0,
    minHeight: 550,
    marginTop: 68
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 8,
    color: '#153b50',
    display: 'flex',
    justifyContent: 'space-around'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    overflow: 'auto'
  }
});

export default styles;
