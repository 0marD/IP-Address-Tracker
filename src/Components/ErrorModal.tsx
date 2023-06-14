import React from 'react'
interface Props{
    text:string
}
const ErrorModal = ({text}:Props):JSX.Element => {
  return (
    <p className="error-modal">{text}</p>
  )
}

export default ErrorModal