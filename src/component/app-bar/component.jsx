import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import BackButton from '@material-ui/icons/ArrowBackIos';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

class Component extends React.Component {
  render() {
    const { classes, title } = this.props;
    return (
      <Box position="static" className={classes.boxAppbar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="Menu"
          >
            <BackButton />
          </IconButton>
          <Typography variant="h6" className={classes.title}>{title}</Typography>
        </Toolbar>
      </Box>
    );
  }
}

export default Component;
