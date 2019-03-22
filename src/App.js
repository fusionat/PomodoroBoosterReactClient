import React, { Component } from 'react';
import PdAppBar from './components/pd-app-bar/'
import { withStyles } from '@material-ui/core/styles';
import styles from './app-style'
import PdSideBar from './components/pd-side-bar'
import PdContent from "./components/pd-content";

class App extends Component {
  render() {
      const { classes }  = this.props;
    return (
      <div className={classes.root}>
          <PdAppBar/>
          <PdSideBar/>
          <PdContent/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
