import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import styles from './list-style';
import tomatoIcon from "../icons/tomato-list.svg";

const TomatoListItem = props => {
  const { data, classes } = props;
  return (
    <ListItem className={classes.li} key={data.id}>
      <img alt="Tomato Icon" className={classes.avatarImage} src={tomatoIcon} />
      <ListItemText
        primary={data.name}
        secondary={
          <React.Fragment>
            <Typography component="span" className={classes.timerText}>
              {data.timerValue}
            </Typography>
          </React.Fragment>
        }
      />
      <IconButton aria-label="stop">
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default withStyles(styles)(TomatoListItem)