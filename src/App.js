import React, { Component } from 'react';
import axios from 'axios';
import Books from './Components/Books';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  getBooks() {
    axios.get('http://localhost:3010/api/books')
    .then(response => {
      this.setState({books: response.data});
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    }); 
  }

  componentDidMount(){
    this.getBooks();
  }

  render() {
    return (
      <div className="App">
        Bookstore
        <Books books = {this.state.books}/>
      </div>
    );
  }
}

export default App;
