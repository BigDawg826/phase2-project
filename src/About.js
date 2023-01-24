import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <img className='center' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwIDlboinM0WKpSKKETe6B31LB9Zdccu0VmUXJEHM-Bh4VmnwSwLs4VG4tadMZrddG3k&usqp=CAU' alt='Stephen King' />
      <p>My Author Bucket List can be used with any author or authors.  I chose Stephen King because of the sheer volume of work he has produced.  He's written 65 novels, 5 non-fiction books and over 200 short stories.  Much of his work has been turned into great movies.  No matter how much people like the movie invariably they'll say "the book is better."  I like movies, too.  They're a great entertainment value for a couple of hours.  But if you want to be entertained for hours and feel like an active participant - read a good book! Your brain will thank you.</p>
      <br></br>
      <Link className='center' to ="/">Return to main page</Link>
    </div>
  )
}

export default About