import React from 'react'
import './CharOutput.css'

const charOutput = (props) => {
    return (
        <div className="Char">
            {props.character}
        </div>
    )
}

export default charOutput;