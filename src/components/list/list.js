import React, { Component } from "react";
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import styles from "./list-style";
import TomatoListItem from '../list-item/list-item'
import withPomodoroService from '../hoc/with-pomodoro-service' 
import { tomatosLoaded } from '../../actions'

class TomatoItemsList extends Component {

  componentDidMount(){      
    const { pomodoroService, tomatosLoaded } = this.props;
    tomatosLoaded(pomodoroService.getTomatos());
  }

  render(){
    const { classes, tomatos } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <List className={classes.root}>
            {tomatos.map(tomato => {
              return (
                <TomatoListItem data={tomato}/>
              );
            })}
          </List>
        </CardContent>
      </Card>
    );
  }
}

TomatoItemsList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ tomatos }) => {
  return {
    tomatos
  }
}

const mapDispatchToProps = {
  tomatosLoaded
}

export default compose(withPomodoroService(), connect(mapStateToProps, mapDispatchToProps),withStyles(styles))(TomatoItemsList);
