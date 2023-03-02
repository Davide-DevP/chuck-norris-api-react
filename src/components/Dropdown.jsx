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

    console.log(categories);
  return (
    <div className="Dropdown">
        <select id={props.id}>
        {categories.map((el,index)=> {return <option value={el} key={index}>{el}</option>})}
        </select>
    </div>
  )
}

export default Dropdown