import React, { Component } from 'react';
import './App.css';
//import ReactDOM from 'react-dom';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component{
  render() {
    return(
      <div className="App">
        {/* <Greet /> */} {/* komentar blok = alt + shift + * /}
                              komentar vrstica = ctrl + '
        {/* <Welcome /> */}
        {<Hello />}
      </div>
    );
  }
}

export default App;