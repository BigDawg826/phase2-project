import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Form({addBook}) {

const [title, setTitle] = useState("")
const [year, setYear] = useState("")
const [img, setImg] = useState("")
const history = useHistory()

function handleTitleChange(e){
    setTitle(e.target.value)
}
function handleYearChange(e){
    setYear(e.target.value)
}
function handleImgChange(e){
    setImg(e.target.value)
}
function handleSubmit(e){
    e.preventDefault()
    let formData = {
        title,
        year,
        img
    }
    fetch("http://localhost:3000/items", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        }, 
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) =>{
        addBook(data)
        history.push("/books")
    } )
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Book Title</label>
            <input value ={title} onChange={handleTitleChange} type = "text" id = "title"/>
            <label htmlFor='year'>Year Published</label>
            <input value ={year} onChange={handleYearChange} type = "text" id = "year"/>
            <label htmlFor='img'>Link to cover photo</label>
            <input value ={img} onChange={handleImgChange} type = "text" id = "img"/>
            <button type = "submit">Submit</button>
        </form>
    </div>
  )
}

export default Form