import * as React from "react";

interface ButtonProps {
    label: string,
    dataOut: any,
    onClick: any
}

const Button = (props: ButtonProps) => {
    const [status,setStatus] =  React.useState(false)
    return (
        <>
        {props.dataOut={status}}
        <button onClick={props.onClick}>{props.label}</button>
        </>
    )
}

export default Button;