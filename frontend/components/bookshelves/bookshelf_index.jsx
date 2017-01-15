import React from 'react';
import Modal from 'react-modal';
import BookIndexContainer from '../books/book_index_container';
import modalStyle from '../../modal_style';

class Bookshelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShelf: null,
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
      selectedShelf: idx,
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
    this.props.createBookshelf(newShelf);
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
        {this.state.selectedShelf === idx ? deleteButton : ''}
      </div>
    ));
    bookshelves.push(
      <div className='bookshelf'
           onClick={() => this.setState({modalOpen: true})}>
        <h5 className='add-button'>add bookshelf</h5>
      </div>
    );

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>-{error}</li>
    ));

    return(
      <div>
        <div className='bookshelf-sidebar'>
          <h4>My Bookshelves</h4>
          <ul className='bookshelf-list'>
            {bookshelves}
          </ul>
        </div>

        <BookIndexContainer books={this.state.shownBooks}
                            title={'My Books'}/>

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={() => this.setState({modalOpen: false})}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>
          <h4>New Bookshelf</h4>
          <ul>
            {errors}
          </ul>
          <form>
            <input placeholder='Title'
                   onChange={this.handleInput}
                   value={this.state.newShelfTitle}></input>
            <button onClick={this.handleSubmit}>Create New Shelf</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Bookshelves;
