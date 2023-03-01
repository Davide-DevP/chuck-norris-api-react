import { useState } from 'react'
import '../styles/Title.css'

function Title() {
  const [count, setCount] = useState(0)

  return (
    <div className="Title">
      <p>Chuck Norris Joke Generator</p>
    </div>
  )
}

export default Title