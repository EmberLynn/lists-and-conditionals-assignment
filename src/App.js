import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stringLength: 0
  }

  textChangeListener = (event) => {
    const stringLength = event.target.value.length;
    this.setState({stringLength: stringLength})
  }

  render(){
    return (
      //create input with change listener that outputs the length of entered text
      <div className='App'>
        <input type='text' onChange={this.textChangeListener}></input>
        <p>{this.state.stringLength}</p>
      </div>
      );
  }

}

export default App;
