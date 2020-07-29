import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharOutput from './CharOutput/CharOutput';

class App extends Component {
  state = {
    inputString: '',
    stringLength: 0,
    charsArray: []
  }

  //takes the user input and creates an array of those characters
  //also sets string length for displaying and validation
  textChangeListener = (event) => {
    const inputString = event.target.value;
    const stringLength = inputString.length;
    const charsArray = inputString.split('')
    this.setState(
      {
        stringLength: stringLength,
        inputString: inputString, 
        charsArray: charsArray
      }
      )
  }

  //deletes a character component when it is clicked and updates the string the user input
  deleteChar = (charIndex) => {
    const chars = [...this.state.charsArray];
    chars.splice(charIndex, 1);
    const inputString = chars.join('');
    this.setState(
      {
        charsArray: chars,
        inputString: inputString
      }
      )
  }

  render(){

    //chars holds each component to be displayed
    let chars = null;
    //make sure array isn't empty or else an exception will be thrown
    if(this.state.charsArray != null){
    //for each character in the array, give it a clickable component
    chars = (
        <div>
          {this.state.charsArray.map((char, index) => {
            return <CharOutput 
            character={char}
            delete={() => this.deleteChar(index)}
            />
        })}
        </div>
    );
    }
    
    //display the page and all of its components
    //input box reflects changes when a character is deleted from the string/array
    return (
      <div className='App'>
        <input type='text' onChange={this.textChangeListener} value={this.state.inputString}></input>
        {chars}
        <p>{this.state.stringLength}</p>
        <Validation textLength={this.state.stringLength}/>
      </div>
      );
  }

}

export default App;
