import React from 'react'

const Button = ({ color = 'default', setColor }) => {
    return (
        <button className={`btn btn-${color === 'default' ? "default " : color}`} onClick={() => setColor(color === "default" ? "aquamarine" : color)}>{color.toUpperCase()}</button>
    )
}

export default Button