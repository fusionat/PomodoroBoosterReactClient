import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './tomato-style';
import Timer from '../timer'
import Chip from '@material-ui/core/Chip';
import TimerController from '../timer-controller'

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            My first Tomato task
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Chip
              label="MyProject"
              color="secondary"
              className={classes.chip}
            />
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <TimerController />
        </div>
      </div>
      <Timer />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);