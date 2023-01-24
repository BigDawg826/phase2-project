import React from 'react'
import {Link} from 'react-router-dom'

function Books({books}) {
  const bookInfo = books.map(data => {
    return (
        <>
        <img src={data.img} width="200px"/>
        <p>Year Published - {data.year}</p>
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