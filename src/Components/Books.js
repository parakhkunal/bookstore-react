import React, { Component } from 'react';
import BookItem from './BookItem';

class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {
        return (
          <BookItem key={book.googleBookId} book={book} />
        );
      });
    }
    return (
      <div className="Books">
        <h3>Book List</h3>
        {bookItems}
      </div>
    );
  }
}

export default Books;