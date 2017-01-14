import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import BookIndexContainer from '../books/book_index_container';

class Bookshelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShelf: null,
      shownBooks: []
    };

    this.selectShelf = this.selectShelf.bind(this);
  }

  componentWillMount() {
    this.props.requestBookshelves();
    this.props.requestUsersBooks();
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  selectShelf(idx) {
    const shownBookshelf = this.props.bookshelves[idx];
    const shownBooks = shownBookshelf.books.map(id => (
      this.props.books[id]
    ));

    this.setState({
      selectShelf: idx,
      shownBooks
    });
  }

  render() {
    const bookshelves = this.props.bookshelves.map((bookshelf, idx) => (
      <div key={idx}
           onClick={() => this.selectShelf(idx)}
           className='bookshelf'>
        <BookshelfIndexItem key={idx} bookshelf={bookshelf}/>
      </div>
    ));
    return(
      <div>
        <div className='bookshelf-sidebar'>
          <h4>My Bookshelves</h4>
          <ul className='bookshelf-list'>
            {bookshelves}
          </ul>
        </div>
        
        <BookIndexContainer books={this.state.shownBooks}/>
      </div>
    );
  }
}

export default Bookshelves;
