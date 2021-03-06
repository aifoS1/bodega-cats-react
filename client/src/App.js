import React, { Component } from 'react';
import Body from './components/Body';
import {Divider} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bodega Cats</h2>
          <p>A place to view all the wonderful Bodega Cats you encounter</p>
        </div>
        <Body/>
      </div>
    );
  }
}

export default App;
