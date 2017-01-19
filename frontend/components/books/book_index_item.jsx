import React from 'react';
import { withRouter } from 'react-router';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.removeShelving = this.removeShelving.bind(this);
  }

  handleClick() {
    this.props.router.push(`/book-detail/${this.props.book.id}`);
  }

  removeShelving(e) {
    e.preventDefault();
    const idx = this.props.bookshelf.books.indexOf(this.props.book.id);
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
  }

  render() {
    let removeShelvingButton;
    if ( this.props.bookshelf ) {
      removeShelvingButton = (
        <button id='delete-shelving'
                onClick={this.removeShelving}>
          Remove
        </button>
            );
    } else {
      removeShelvingButton = '';
    }

    return(
      <div className='book-index-item' onClick={this.handleClick}>
        <img src={`http://res.cloudinary.com/biblio/image/upload/w_100/${this.props.book.image_url}`}>
        </img>
        <div>
          <h4>{this.props.book.title}</h4>
          <h6>{this.props.book.author}</h6>
          {removeShelvingButton}
        </div>
      </div>
    );
  }
}

export default withRouter(BookIndexItem);
