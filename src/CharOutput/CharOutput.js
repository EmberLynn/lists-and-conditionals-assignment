import React from 'react'
import './CharOutput.css'

//a clickable component for each character in the array
//deleteChar is called when component is clicked
const charOutput = (props) => {
    return (
        <div className="Char" onClick={props.delete}>
            <p>{props.character}</p>
        </div>
    )
}

export default charOutput;