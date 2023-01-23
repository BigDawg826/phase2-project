import React from 'react'
import {Link} from 'react-router-dom'

function Books({books}) {
  const bookInfo = books.map(data => {
    return (
        <>
        <img src={data.img} width="200px"/>
        <h3>{data.year}</h3>
        </>
    )
  })
  
  return (
    <div>
       {bookInfo} 
       <Link to ="/">Return to main page</Link>
    </div>
  )
}

export default Books