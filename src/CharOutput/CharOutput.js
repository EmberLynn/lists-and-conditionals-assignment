import React from 'react'
import './CharOutput.css'

const charOutput = (props) => {
    return (
        <div className="Char">
            <p onClick={props.delete}>{props.character}</p>
        </div>
    )
}

export default charOutput;