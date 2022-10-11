import React from 'react'
import './Input.css'

const input = ({text, result}) => {
    return (
        <div className='input-wrapper'>
            <div className="result">
                {result}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default input