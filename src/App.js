import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharOutput from './CharOutput/CharOutput';

class App extends Component {
  state = {
    inputString: '',
    stringLength: 0,
  }

  textChangeListener = (event) => {
    const inputString = event.target.value;
    const stringLength = inputString.length;
    this.setState(
      {
        stringLength: stringLength,
        inputString: inputString, 
        charsArray: this.state.inputString.split('')
      }
      )
  }

  deleteChar = (charIndex) => {
    const chars = [...this.state.charsArray];
    chars.splice(charIndex, 1);
    this.setState({charsArray: chars})
  }

  render(){

    let chars = null;
    if(this.state.charsArray != null){
    chars = (
        <div>
          {this.state.charsArray.map((char, index) => {
            return <CharOutput 
            character={char}
            click={() => this.deleteChar(index)}/>
        })}
        </div>
    );
    }
    


    return (
      //create input with change listener that outputs the length of entered text
      <div className='App'>
        <input type='text' onChange={this.textChangeListener}></input>
        {chars}
        <p>{this.state.stringLength}</p>
        <Validation textLength={this.state.stringLength}/>
      </div>
      );
  }

}

export default App;
