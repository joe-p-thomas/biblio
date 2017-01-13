import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const books = this.props.books.map((book, idx) => (
      <BookIndexItem key={idx} book={book} />
    ));
    return(
      <div className='book-index'>
        <ul>
          {books}
        </ul>
    </div>
    );
  }
}

export default BookIndex;
