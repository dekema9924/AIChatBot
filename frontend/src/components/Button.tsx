import React from 'react'

interface ButtonProps {
    text: string
    style: string
    icon?: React.ReactNode
    onClick?: () => void
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={props.style}>
            {props.icon && <span className="mr-2">{props.icon}</span>}
            {props.text}
        </button>
    )
}

export default Button
