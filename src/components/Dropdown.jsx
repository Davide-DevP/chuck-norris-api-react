import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown(props) {
  const [categories, setCategories] = useState([])
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    setCategories(data);
  }).catch((e)=>{
    console.log(e)
  })

  return (
    <div className="Dropdown">
        <select id={props.id}>
        <option value="random">Random</option>
        {categories.map((el,index)=> {return <option value={"random?category="+el} key={index}>{el}</option>})}
        </select>
    </div>
  )
}

export default Dropdown