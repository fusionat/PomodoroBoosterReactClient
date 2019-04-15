import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Stop from '@material-ui/icons/Stop';
import styles from './timer-controller-style'
import IconButton from '@material-ui/core/IconButton';

const TimeController = (props) => {
    const { classes } = props;
    
    return (
        <React.Fragment>
            <IconButton aria-label="Start" onClick={()=>{alert(1);}}>
                <PlayArrowIcon className={classes.play} />
            </IconButton>

            <IconButton aria-label="pause">
                <Pause className={classes.pause} />
            </IconButton>

            <IconButton aria-label="stop">
                <Stop className={classes.stop} />
            </IconButton>
        </React.Fragment>
    );
}

export default withStyles(styles)(TimeController)