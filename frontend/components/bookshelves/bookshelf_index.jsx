import React from 'react';
import Modal from 'react-modal';
import BookIndexContainer from '../books/book_index_container';
import modalStyle from '../../modal_style';

class Bookshelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShelf: 0,
      selectedShelfTitle: 'Read',
      shownBooks: [],
      modalOpen: false,
      newShelfTitle: ''
    };

    this.selectShelf = this.selectShelf.bind(this);
    this.deleteShelf = this.deleteShelf.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestBookshelves().then(() => {
      const shownBooks = this.props.bookshelves[0].books.map(id => (
        this.props.books[id]
      ));
      this.setState({shownBooks});
    });
  }

  componentWillReceiveProps(nextProps) {
    let selectedShelf = (this.state.selectedShelf >= nextProps.bookshelves.length) ?
      this.state.selectedShelf - 1 : this.state.selectedShelf;
    const shownBooks = nextProps.bookshelves[selectedShelf].books.map(id => (
      this.props.books[id]
    ));
    this.setState({
      shownBooks,
      selectedShelf,
      selectedShelfTitle: nextProps.bookshelves[selectedShelf].title
    });
  }

  selectShelf(idx) {
    const shownBookshelf = this.props.bookshelves[idx];
    const shownBooks = shownBookshelf.books.map(id => (
      this.props.books[id]
    ));

    this.setState({
      selectedShelf: idx,
      selectedShelfTitle: shownBookshelf.title,
      shownBooks
    });
  }

  deleteShelf() {
    this.props.deleteBookshelf(
      this.props.bookshelves[this.state.selectedShelf]
    );
  }

  handleInput(e) {
    this.setState({newShelfTitle: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newShelf = {
      title: this.state.newShelfTitle,
      user_id: this.props.currentUser.id
    };
    this.props.createBookshelf(newShelf).then(() =>
      this.setState({
        modalOpen: false,
        newShelfTitle: ''
      })
    );
  }

  render() {
    const deleteButton =(
      <button className='delete-button'
              onClick={this.deleteShelf}>
      x</button>
    );

    const bookshelves = this.props.bookshelves.map((bookshelf, idx) => (
      <div key={idx}
           onClick={() => this.selectShelf(idx)}
           className='bookshelf'>
        <h5>{bookshelf.title}</h5>
        {this.state.selectedShelf === idx &&  idx !== 0 && idx !== 1 ?
         deleteButton : ''}
      </div>
    ));
    bookshelves.push(
      <div className='bookshelf'
           onClick={() => this.setState({modalOpen: true})}
           key={'add'}>
        <h5 className='add-button'>add bookshelf</h5>
      </div>
    );

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>-{error}</li>
    ));

    return(
      <div>
        <div className='bookshelf-sidebar'>
          <h4 className='title'>My Bookshelves</h4>
          <ul className='bookshelf-list'>
            {bookshelves}
          </ul>
        </div>

        <BookIndexContainer books={this.state.shownBooks}
                            title={this.state.selectedShelfTitle}
                            bookshelf={this.props.bookshelves[this.state.selectedShelf]}/>

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={() => this.setState({modalOpen: false})}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>
          <h4 className='bookshelf-form-title'>New Bookshelf</h4>
          <ul>
            {errors}
          </ul>
          <form className='bookshelf-form'>
            <input placeholder='Title'
                   onChange={this.handleInput}
                   value={this.state.newShelfTitle}
                   className='new-bookshelf-form'></input>
            <button onClick={this.handleSubmit}>Create New Shelf</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Bookshelves;
