import React from 'react';
import { withRouter } from 'react-router';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "author",
      sortOrder: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.sortBy = this.sortBy.bind(this);
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

  handleSortClick(property) {
    let sortOrder = this.state.sortOrder;
    sortOrder *= (property === this.state.sortBy) ? -1 : 1;
    this.setState({
      sortBy: property,
      sortOrder
    });
  }

  sortBy(property) {
    if (property === "author") {
      return this.sortByAuthor(this.state.sortOrder);
    } else if (property === "title") {
      return this.sortByTitle(this.state.sortOrder);
    }
  }

  sortByAuthor(sortOrder) {
    return function (a,b) {
        let aLastName = a.author.split(" ").pop();
        let bLastName = b.author.split(" ").pop();

        let result;
        if (aLastName < bLastName) {
          result = -1;
        } else if (aLastName > bLastName) {
          result = 1;
        } else {
          result = 0;
        }
        return result * sortOrder;
    };
  }

  sortByTitle(sortOrder) {
    function trimTitle(title) {
      if (title.substring(0,2) === "A ") {
        title = title.slice(2);
      } else if (title.substring(0,4) === "The ") {
        title = title.slice(4);
      }
      return title;
    }

    return function (a,b) {
        let aTitle = trimTitle(a.title);
        let bTitle = trimTitle(b.title);

        let result;
        if (aTitle < bTitle) {
          result = -1;
        } else if (aTitle > bTitle) {
          result = 1;
        } else {
          result = 0;
        }
        return result * sortOrder;
    };
  }

  render() {
    const books = this.props.books.sort(this.sortBy(this.state.sortBy)).map((book, idx) => (
      <BookIndexItem key={book.id}
                     book={book}
                     bookshelf={this.props.bookshelf}
                     updateBookshelf={this.props.updateBookshelf}/>
    ));
    const sortProps = ["author", "title"];
    const sortButtons = sortProps.map((property, idx) => (
      <p key={idx}
         onClick={() => this.handleSortClick(property)}
         className={(property === this.state.sortBy) ? "sort-selected" : ""}>
        {property}
      </p>
    ));
    return(
      <div className='book-index'>
        <h2>{this.props.title}</h2>
        <div className='sort'>
          sort by:
          <ul>
            {sortButtons}
          </ul>
        </div>

        <ul className='book-list'
            onClick={this.handleClick}>
          {books}
        </ul>
    </div>
    );
  }
}

export default withRouter(BookIndex);
