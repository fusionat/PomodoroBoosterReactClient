import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import styles from './tomato-icon-style'
import tomatoIcon from "../icons/tomato.svg"

class TomatoIcon extends Component {
  render() {
    const { classes } = this.props;
    return (
      <img src={tomatoIcon} alt='Tomato Icon' className={classes.icon} />
    )
  }
}

export default withStyles(styles)(TomatoIcon);