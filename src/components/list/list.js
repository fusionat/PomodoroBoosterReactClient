import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import tomatoIcon from "../icons/tomato-list.svg";
import styles from "./list-style";

const data = [
  {
    id: 1,
    name: "My tomato",
    description: "00:25:00",
    fullComplete: true
  },
  {
    id: 2,
    name: "My tomato",
    description: "00:25:00",
    fullComplete: true
  },
  {
    id: 3,
    name: "My tomato",
    description: "00:25:00",
    fullComplete: false
  }
];

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <List className={classes.root}>
          {data.map(data => {
            return (
              <ListItem className={classes.li} key={data.id}>
               <img alt="Tomato Icon" className={classes.avatarImage} src={tomatoIcon} />               
                <ListItemText
                  primary={data.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        className={classes.timerText}
                      >
                        {data.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <IconButton aria-label="stop">
                  <Delete/>
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlignItemsList);
