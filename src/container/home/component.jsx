import React from 'react';
import AppBar from '../../component/app-bar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TopSeller from '../../component/top-seller';
import data from '../../data/index'

class Component extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <AppBar title="Belanja" />
        <Paper className={classes.paper}>
          <React.Fragment>
            <h5 className={classes.listTitle}>
              <strong>Produk Terlaris</strong>
              <b style={{ color: '#F15B5D' }}>Lihat Semua</b>
            </h5>
            <Grid container spacing={0} className={classes.gridList}>
              {data.map(top => {
                return (
                  <Grid key={top} item>
                    <TopSeller top={top} />
                  </Grid>
                )
              }
              )}
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    );
  }
}

export default Component;
