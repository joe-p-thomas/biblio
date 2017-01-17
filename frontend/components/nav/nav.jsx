import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import modalStyle from '../../modal_style';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.conditionalRedirect = this.conditionalRedirect.bind(this);
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  conditionalRedirect(path) {
    if (this.props.currentUser) {
      this.props.router.push(path);
    } else {
      this.setState({
        modalOpen: true
      });
    }
  }


  render() {
    let bookshelfButton = (
      <button onClick={() => this.conditionalRedirect('/bookshelves')}>
        Bookshelves
      </button>
    );

    let browseButton = (
      <button onClick={() => this.props.router.push('/')}>
        Browse
      </button>
    );

    let addBookButton = (
      <button onClick={() => this.conditionalRedirect('/new-book')}>
        Add Book
      </button>
    );

    return (
      <div>
        {bookshelfButton}
        {browseButton}
        {addBookButton}

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={this.closeModal}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>
          <h3>Access Denied</h3>
          <p>Please log in or sign up to view the page.</p>
        </Modal>
      </div>
    );
  }

}

export default withRouter(Nav);
