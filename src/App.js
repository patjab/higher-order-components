import React, { Component } from 'react';
import './App.css';
import ButtonOne from './components/ButtonOne'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
        <ButtonOne/>
      </div>
    );
  }
}

export default App;
