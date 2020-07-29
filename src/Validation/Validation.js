import React from 'react';

//takes the stringLength passed to it from App.js and checks for length then displays a message
const validation = (props) => {
    let message = null;
    if(props.textLength > 8){
        message = 'Text long enough';
    }
    else {
        message = 'Text not long enough';
    }

    return (
        <p>{message}</p>
    )
}

export default validation;