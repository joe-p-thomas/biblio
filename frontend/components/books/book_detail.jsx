import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from '../../modal_style';
import ReviewsContainer from '../review/reviews_container';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelfModalOpen: false,
      bookshelves: this.props.bookshelves
    };

    this.handleInput = this.handleInput.bind(this);
    this.updateShelvings = this.updateShelvings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( !this.props.currentUser && nextProps.currentUser) {
      this.props.requestBookshelves();
    }
    if ( this.props.bookshelves !== nextProps.bookshelves ) {
      this.setState({bookshelves: nextProps.bookshelves});
    }
  }

  handleInput(e) {
    const shelfId = e.target.value;
    let newShelves = this.state.bookshelves;
    const idx = newShelves[shelfId].books.indexOf(this.props.book.id);
    if ( idx === -1 ) {
      newShelves[shelfId].books.push(this.props.book.id);
    } else {
      newShelves[shelfId].books.splice(idx, 1);
    }
    this.setState({
      bookshelves: newShelves
    });
  }

  updateShelvings(e) {
    e.preventDefault();
    Object.values(this.state.bookshelves).forEach((bookshelf) => {
      let book_ids = bookshelf.books;
      if ( book_ids.length === 0) {
        book_ids = [''];
      }
      this.props.updateBookshelf({
        id: bookshelf.id,
        book_ids
      });
    });
    this.setState({bookshelfModalOpen: false});
  }

  render() {
    let updateButton;
    if ( this.props.currentUser &&
         this.props.currentUser.id === this.props.book.user_id) {
      updateButton = (
        <button onClick={() => this.props.router.push(`/edit-book/${this.props.book.id}`)}>
          Edit Book
        </button>
      );
    } else {
      updateButton = '';
    }

    let bookshelfButton;
    if ( this.props.currentUser ) {
      bookshelfButton = (
        <button onClick={() => this.setState({bookshelfModalOpen:true})}>
          Add to Bookshelves
        </button>
      );
    } else {
      bookshelfButton = '';
    }

    const book = this.props.book;
    const shelvingCheckboxes = Object.values(this.state.bookshelves).map(
      (bookshelf) => {
        let checked = false;
        if ( bookshelf.books.includes(book.id) ) {
          checked = true;
        }
        return(
          <label key={bookshelf.id}>{bookshelf.title}:
            <input type='checkbox'
                   name='shelving_ids[]'
                   value={bookshelf.id}
                   key={bookshelf.id}
                   checked={checked}
                   onChange={this.handleInput}></input>
          </label>
        );
    });

    let avgRating;
    if ( this.props.book.avgRating > 0 ) {
        avgRating = (
          <p>Avg. Rating: {this.props.book.avgRating}</p>
        );
    }

    return (
      <div className='book-detail-container'>
        <div className='book-detail'>
          <div className='book-detail-left'>
            <img src={`http://res.cloudinary.com/biblio/image/upload/w_250/${this.props.book.image_url}`}>
            </img>
            {updateButton}
            {bookshelfButton}
          </div>
          <div className='book-detail-text'>
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.author}</h4>
            {avgRating}
            <p>{this.props.book.description}</p>
          </div>
        </div>

        <ReviewsContainer />

        <Modal isOpen={this.state.bookshelfModalOpen}
               onRequestClose={() => this.setState({bookshelfModalOpen: false})}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>
          <form className='shelving-form'>
            <h4>Bookshelves</h4>
            {shelvingCheckboxes}
            <button onClick={this.updateShelvings}>Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(BookDetail);
