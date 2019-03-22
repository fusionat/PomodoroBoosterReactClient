import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Delete from  '@material-ui/icons/Delete'
import PdAppBar from './components/pd-app-bar/'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PdAppBar/>
      </div>
    );
  }
}

export default App;
