import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const PdAppBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Pomodoro-Booster
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default  PdAppBar;