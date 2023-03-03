import { useState } from 'react'
import '../styles/Button.css'

function Button(props) {

  return (
    <div className="Button">
        <button id={props.id} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button