import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title.jsx'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeText from './components/JokeText.jsx'

function App() {
  const [joke, setJoke] = useState("")

  function generateJoke(){
    let selectedCategory = document.getElementById("dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + selectedCategory;
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
    }).catch((e)=>{
      console.log(e)
    })
  }

  function copyJoke(){
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }

  return (
    <div className="App">
      <Title>Chuck Norris Joke Generator</Title>
      <Button id='generate' onClick={generateJoke}>Generate Joke</Button>
      <Button id='clipboard' onClick={copyJoke}>Copy to clipboard</Button>
      <Dropdown id='dropdown'></Dropdown>
      <JokeText id='JokeText'>{joke}</JokeText>
    </div>
  )
}

export default App
