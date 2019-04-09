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
import tomatoIcon from "../icons/tomato-list.svg";
import styles from "./list-style";

const data = [
  {
    name: "My tomato",
    description: "00:25:00"
  },
  {
    name: "Focus on English",
    description: "00:25:00"
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
              <ListItem className={classes.li} >
                <ListItemAvatar className={classes.avatarImage}>
                  <img alt="Tomato Icon" src={tomatoIcon} />
                </ListItemAvatar>
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
