import React from 'react';
import { withRouter } from 'react-router';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const books = this.props.books.map((book, idx) => (
      <BookIndexItem key={idx}
                     book={book}
                     requestDetail={this.props.requestBookDetail}/>
    ));
    return(
      <div className='book-index'>
        <h2>{this.props.title}</h2>
        <ul className='book-list'>
          {books}
        </ul>
    </div>
    );
  }
}

export default withRouter(BookIndex);
