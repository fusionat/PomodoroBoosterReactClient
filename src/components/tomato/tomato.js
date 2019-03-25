import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Stop from '@material-ui/icons/Stop';
import TomatoIcn from './icons/tomato.svg'
import styles from './tomato-style';
import Timer from '../timer/timer'

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Tomato Name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           Tags
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           <Timer/>
          </Typography>        
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Start">
            <PlayArrowIcon className={classes.play}/>
          </IconButton>

          <IconButton aria-label="pause">
            <Pause className={classes.pause} />
          </IconButton>

          <IconButton aria-label="stop">
            <Stop className={classes.stop}/>
          </IconButton>
        </div>
      </div>

      <div className={classes.coverHolder}>
        <CardMedia
          className={classes.cover}
          image={TomatoIcn}
          title="Live from space album cover"
        />
      </div>
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);