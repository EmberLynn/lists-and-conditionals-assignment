import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

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
        <Validation textLength={this.state.stringLength}/>
      </div>
      );
  }

}

export default App;
