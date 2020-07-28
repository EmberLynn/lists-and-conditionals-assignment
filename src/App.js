import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharOutput from './CharOutput/CharOutput';

class App extends Component {
  state = {
    inputString: null,
    stringLength: 0
  }

  textChangeListener = (event) => {
    const inputString = event.target.value;
    const stringLength = inputString.length;
    this.setState(
      {
        stringLength: stringLength,
        inputString: inputString
      }
      )
  }

  render(){

    // let chars = null;
    // let charsArray = this.state.inputString.split;
    // chars = (
    //     <div>
    //       {charsArray.map((char) => {
    //         return <CharOutput/>
    //     })}
    //     </div>
    // );


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
