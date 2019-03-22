import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import style from  './pd-app-bar-style';

const PdAppBar = (props) => {
    const { classes } = props;
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Pomodoro-Booster
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default withStyles(style)(PdAppBar);