import React from 'react';

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