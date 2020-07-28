import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stringLength: 0
  }

  //still need to list event as argument if using it
  textChangeListener = (event) => {
    const inputString = event.target.value;
    const stringLength = inputString.length;
  }

  render(){
    return (
      //create input with change listener that outputs the length of entered text
      <div className='App'>
        <input type='text' onChange={this.textChangeListener}></input>
      </div>
      );
  }

}

export default App;
