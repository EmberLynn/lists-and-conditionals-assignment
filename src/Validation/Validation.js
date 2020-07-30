import React from 'react';

//takes the string length passed to it from App.js and checks for length then displays a message
const validation = (props) => {
    
    let message = 'Text long enough';
    if(props.textLength < 8){
        message = 'Text not long enough';
    }

    return (
        <p>{message}</p>
    )
}

export default validation;