import React from 'react';
import { withRouter } from 'react-router';
import BookIndexContainer from '../books/book_index_container';
import modalStyle from '../../modal_style';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToNewBook = this.redirectToNewBook.bind(this);
  }

  redirectToNewBook(e) {
    e.preventDefault();
    this.props.router.push('/new-book');
  }

  render() {
    return(
      <div>
        <BookIndexContainer books={this.props.books}
                            title='Search Results'/>
        <div className='new-book-prompt'>
          <p>Didn't find the book you were looking for?</p>
          <button onClick={this.redirectToNewBook}>Add a new one</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
