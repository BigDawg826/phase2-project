
import './App.css';
import React, {useState, useEffect} from 'react';
import Books from './Books';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Form from './Form';
import Home from './Home';

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => setBooks(data))
  },[]
  )
  
  const addBook = (newBook) => {
    //take data from form submit and add to db.json file by invoking setBooks ()
    setBooks(prevBooks => [...prevBooks, newBook])
  }

  
  return (
      <div>
        <Switch>
          <Route path ="/books/new">
            <Form addBook={addBook}/> 
          </Route>
          <Route path ="/books">
            <Books books={books}/> 
          </Route>
          <Route path ="/about">
            <About /> 
          </Route>
          <Route exact path ="/">
            <Home /> 
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default App;
