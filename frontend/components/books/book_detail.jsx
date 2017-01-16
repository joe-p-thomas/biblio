import React from 'react';
import Modal from 'react-modal';
import modalStyle from '../../modal_style';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelfModalOpen: false
    };
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    let updateButton;
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

    return (
      <div className='book-detail-container'>
        <div className='book-detail'>
          <div>
            <img src={`http://res.cloudinary.com/biblio/image/upload/w_200/${this.props.book.image_url}`}>
            </img>
          </div>
          <div className='book-detail-text'>
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.author}</h4>
            <p>{this.props.book.description}</p>
          </div>
        </div>
        {bookshelfButton}
        <Modal isOpen={this.state.bookshelfModalOpen}
               onRequestClose={() => this.setState({bookshelfModalOpen: false})}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>
          <h2>testing</h2>

        </Modal>
      </div>
    );
  }
}

export default BookDetail;
