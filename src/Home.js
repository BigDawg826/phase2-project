import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <video controls>
        <source src="https://media.gettyimages.com/id/1003426724/nl/video/sequence-showing-stephen-king-typing-on-his-laptop-at-his-home-in-bangor-maine.mp4?s=mp4-640x640-gi&k=20&c=yFsx586av4RxfcAIoK4IUO6MBv8_OSv9UsXu7r6qoBU=" alt="Stephen King typing"/>
      </video>
      <br></br>
      <Link to="/books">Books I've Read</Link>
        <br></br>
      <Link to="/books/new">Read or Recommendations</Link>
        <br></br>
      <Link to="/about">About My Author Bucket List?</Link>
    </div>
  )
}

export default Home