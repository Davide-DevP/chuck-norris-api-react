import { useState } from 'react'
import '../styles/Button.css'

function Button() {
  const [count, setCount] = useState(0)

  return (
    <div className="Button">
        <button>Test Bottone</button>
    </div>
  )
}

export default Button