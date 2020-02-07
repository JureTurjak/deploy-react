import React, { Component } from 'react';
import './App.css';
//import ReactDOM from 'react-dom';
import { Greet } from './components/Greet'

class App extends Component{
  render() {
    return(
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;