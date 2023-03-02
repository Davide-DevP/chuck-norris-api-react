import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title>Chuck Norris Joke Generator</Title>
      <Button id='generate'>Generate Joke</Button>
      <Button id='clipboard'>Copy to clipboard</Button>
      <Dropdown id='dropdown'></Dropdown>
    </div>
  )
}

export default App
