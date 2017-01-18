import React from 'react';
import Modal from 'react-modal';
import modalStyle from '../../modal_style';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      modelOpen: false,
      review: {
        rating: 0,
        body: ''
      }
    };

    // this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {

  }

  handelSubmit(e) {
    e.preventDefault();
  }

  render() {
    let reviewButton;
    if ( this.props.currentUser) {
      reviewButton = (
        <button onClick={() => this.setState({modalOpen: true})}>
          Review Book
        </button>
      );
    } else {
      reviewButton = '';
    }

    const reviewList = (
      Object.values(this.props.reviews).map((review) => (
        <li className='review-item'
            key={review.id}>
          <h4>{review.userName}</h4>
          <p>rating: {review.rating}</p>
        </li>
      ))
    );
    return(
      <div className='reviews-container'>
        <h2>Reviews</h2>
        { reviewButton }
        <ul className='review-list'>
          {reviewList}
        </ul>


        <Modal isOpen={this.state.modalOpen}
               onRequestClose={() => this.setState({modalOpen: false})}
               className='modal'
               style={modalStyle}
               contentLabel='Modal'>

              <h4>Review Form</h4>
              <form>
                <input onChange={this.handleInput}></input>
              </form>
        </Modal>
      </div>
    );
  }
}

export default Reviews;
