import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='center'>
      <h1>AUTHOR BUCKET LIST</h1>
      <br></br>
      <p>Welcome to my <strong>Author Bucket List application</strong>.  Here, I visually display authors and their books that I've read.  I can attach a personal note about a particular selection.  In addition, someone else can leave a comment or review about a particular book.  Feel free to peruse my list.  It's in the early stages.  I hope to grow it every month!</p>
      <br></br>
      <video controls autoplay>
        <source src="https://media.gettyimages.com/id/1003426724/nl/video/sequence-showing-stephen-king-typing-on-his-laptop-at-his-home-in-bangor-maine.mp4?s=mp4-640x640-gi&k=20&c=yFsx586av4RxfcAIoK4IUO6MBv8_OSv9UsXu7r6qoBU=" alt="Stephen King typing"/>
      </video>
      <br></br>
      <Link to="/books">Books I've Read</Link>
        <br></br>
      <Link to="/books/new">Recommendations</Link>
        <br></br>
      <Link to="/about">Why Stephen King</Link>
    </div>
  )
}

export default Home