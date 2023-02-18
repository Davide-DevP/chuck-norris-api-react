import { useState } from 'react'
import './styles/App.css'
import './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title></Title>
    </div>
  )
}

export default App
