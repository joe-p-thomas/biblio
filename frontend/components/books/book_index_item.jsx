import React from 'react';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeShelving = this.removeShelving.bind(this);
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
        <button id='delete-shelving'>
          Remove
        </button>
            );
    } else {
      removeShelvingButton = '';
    }

    return(
      <div className='book-index-item' id={this.props.book.id}>
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

export default BookIndexItem;
