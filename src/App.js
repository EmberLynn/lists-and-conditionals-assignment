import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharOutput from './CharOutput/CharOutput';

class App extends Component {
  state = {
    inputString: '',
  }

  //takes the user input and creates an array of those characters
  //also sets string length for displaying and validation
  textChangeListener = (event) => {
    this.setState(
      {
        inputString: event.target.value, 
      }
      )
  }

  //deletes a character component when it is clicked and updates the string the user input
  deleteChar = (charIndex) => {
    const chars = this.state.inputString.split('');
    chars.splice(charIndex, 1);
    const inputString = chars.join('');
    this.setState(
      {
        inputString: inputString,
      }
      )
  }

  render(){

    //chars holds each component to be displayed
    let chars = null;
    //for each character in the array, give it a clickable component
    chars = (
        <div>
          {this.state.inputString.split('').map((char, index) => {
            return <CharOutput 
            character={char}
            key={index}
            delete={() => this.deleteChar(index)}
            />
        })}
        </div>
    );
  
    
    //display the page and all of its components
    //input box reflects changes when a character is deleted from the string/array
    return (
      <div className='App'>
        <input type='text' onChange={this.textChangeListener} value={this.state.inputString}></input>
        {chars}
        <p>{this.state.inputString.length}</p>
        <Validation textLength={this.state.inputString.length}/>
      </div>
      );
  }

}

export default App;
