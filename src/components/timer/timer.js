import React, { Component } from 'react'
import EasyTimer from 'easytimer.js'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './timer-style'

class Timer extends Component {
    constructor(){
        super();
        this.timer = new EasyTimer();    
        this.timer.start();
        this.state = {time: '00:00:00'};
        this.timer.addEventListener('secondsUpdated', (e) => {
            this.setState( () => {
                return  {
                    time: this.timer.getTimeValues().toString()
                }
            }
                   
        )            
        });
    }

    render = () => {
        const { classes } = this.props;

        return (
            <CardContent className={classes.timer}>
                <Typography className={classes.timerText} >
                    {this.state.time}
                </Typography> 
            </CardContent>  
        )
    }
}

export default withStyles(styles)(Timer)