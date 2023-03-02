import { useState } from 'react'
import '../styles/Title.css'

function Title(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="Title">
      <p>{props.children}</p>
    </div>
  )
}

export default Title