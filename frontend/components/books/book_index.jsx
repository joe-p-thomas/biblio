import React from 'react';
import { withRouter } from 'react-router';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === 'delete-shelving') {
      e.preventDefault();
      const bookId = parseInt(e.target.parentElement.parentElement.id);
      const idx = this.props.bookshelf.books.indexOf(bookId);
      let newBooks = this.props.bookshelf.books;
      newBooks.splice(idx, 1);
      if ( newBooks.length === 0) {
        newBooks = [''];
      }
      this.props.updateBookshelf({
        id: this.props.bookshelf.id,
        book_ids: newBooks
      });
      e.stopPropagation();
    } else if (e.target.className !== 'book-list') {
      let el = e.target;
      while (el.className !== 'book-index-item') {
        el = el.parentElement;
      }
      this.props.router.push(`/book-detail/${el.id}`);
    }
    e.stopPropagation();
  }

  render() {
    const books = this.props.books.map((book, idx) => (
      <BookIndexItem key={book.id}
                     book={book}
                     bookshelf={this.props.bookshelf}
                     updateBookshelf={this.props.updateBookshelf}/>
    ));
    return(
      <div className='book-index'>
        <h2>{this.props.title}</h2>
        <ul className='book-list'
            onClick={this.handleClick}>
          {books}
        </ul>
    </div>
    );
  }
}

export default withRouter(BookIndex);
