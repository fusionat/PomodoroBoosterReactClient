import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import styles from './tomato-icon-list-style'
import TomatoIcon from './tomato-icon'

class TomatoIconList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TomatoIcon/>
        <TomatoIcon/>
        <TomatoIcon/>
        <TomatoIcon/>
      </div>
    )
  }
}

export default withStyles(styles)(TomatoIconList)