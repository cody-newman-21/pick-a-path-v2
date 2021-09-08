import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={`/${props.nextStory}`}>{props.text}</Link>
  )
}

export default Button
