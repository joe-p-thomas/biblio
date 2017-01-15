import React from 'react';
import BookIndexContainer from '../books/book_index_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <BookIndexContainer books={this.props.books}
                            title='Search Results'/>
        <div className='new-book-prompt'>
          <p>Didn't find the book you were looking for?</p>
          <button>Add a new one</button>
        </div>
      </div>
    );
  }
}

export default SearchResults;
