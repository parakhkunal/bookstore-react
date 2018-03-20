import React, { Component } from 'react';

class BookItem extends Component {
  render() {
    return (
      	<table>
		  <thead>
			<tr>
			    <th>Title</th>
			    <th>Description</th>
			</tr>
		  </thead>
		  <tbody>
		  <tr className="Book">
		    <td>{this.props.book.title}</td>
		    <td>{this.props.book.description}</td>
		  </tr>
		  </tbody>
		</table>
    );
  }
}

export default BookItem;
