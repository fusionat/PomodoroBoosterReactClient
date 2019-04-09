import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import styles from "./list-style";
import TomatoListItem from '../list-item/list-item'
const data = [
  {
    id: 1,
    name: "TomatoTimers is a Custom Pomodoro Timer featuring To-do List with animated Tomatoes to boost your productivity.",
    description: "00:25:00",
    fullComplete: true
  },
  {
    id: 2,
    name: "TomatoTimer is a flexible and easy to use online Pomodoro Technique Timer.",
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
              <TomatoListItem data={data}/>
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
