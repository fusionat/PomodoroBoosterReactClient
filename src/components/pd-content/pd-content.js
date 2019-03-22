import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './pd-content-style'
const PdContent = (props) => {
    const {classes}= props;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1>Here will be content as soon as possible!</h1>
        </main>
    )
};

export default withStyles(styles)(PdContent)