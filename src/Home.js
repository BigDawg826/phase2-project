import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/books">Books I've Read</Link>
        <br></br>
        <Link to="/books/new">Recommendation</Link>
        <br></br>
        <Link to="/about">Why I'm reading Stephen King?</Link>
    </div>
  )
}

export default Home