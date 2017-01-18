import React from 'react';
import Modal from 'react-modal';
import modalStyle from '../../modal_style';
import { merge } from 'lodash';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      modalOpen: false,
      review: {
        book_id: this.props.bookId,
        rating: null,
        body: ''
      }
    };
    if ( this.props.usersReview ) {
      this.state.review = this.props.usersReview;
      this.state.review.body = this.state.review.body || '';
    }

    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyInput(e) {
    const review =
      merge({}, this.state.review, {body: e.target.value});
    this.setState({review});
  }

  handleRatingInput(e) {
    const review =
      merge({}, this.state.review, {rating: parseInt(e.target.value)});
    this.setState({review});
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.props.usersReview ) {
      this.props.updateReview(this.state.review)
        .then(() => this.setState({modalOpen: false}));
    } else {
      this.props.createReview(this.state.review)
        .then(() => this.setSTte({modalOpen: false}));
    }
  }

  render() {
    let reviewButton;
    if ( !this.props.currentUser) {
      reviewButton = '';
    } else if ( this.props.usersReview ) {
      reviewButton = (
        <button onClick={() => this.setState({modalOpen: true})}>
          Edit Review
        </button>
      );
    } else {
      reviewButton = (
        <button onClick={() => this.setState({modalOpen: true})}>
          Review Book
        </button>
      );
    }

    const reviewList = (
      Object.values(this.props.reviews).map((review) => (
        <li className='review-item'
            key={review.id}>
          <h4>{review.userName}</h4>
          <p>rating: {review.rating}</p>
          <p>review: {review.body || ''}</p>
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

              <form className='review-form'>
                <h5>Rating</h5>
                <div className='star-ratings'>
                <input onChange={this.handleRatingInput}
                       type='radio'
                       name='rating'
                       value={1}
                       checked={this.state.review.rating === 1 ? true:false}></input>
                     <input onChange={this.handleRatingInput}
                       type='radio'
                       name='rating'
                       value={2}
                       checked={this.state.review.rating === 2 ? true:false}></input>
                     <input onChange={this.handleRatingInput}
                       type='radio'
                       name='rating'
                       value={3}
                       checked={this.state.review.rating === 3 ? true:false}></input>
                     <input onChange={this.handleRatingInput}
                       type='radio'
                       name='rating'
                       value={4}
                       checked={this.state.review.rating === 4 ? true:false}></input>
                     <input onChange={this.handleRatingInput}
                       type='radio'
                       name='rating'
                       value={5}
                       checked={this.state.review.rating === 5 ? true:false}></input>
                   </div>
                     <h5>Review</h5>
                     <textarea onChange={this.handleBodyInput}
                       name='body'
                       value={this.state.review.body}></textarea>

                     <button onClick={this.handleSubmit}>Submit</button>
              </form>
        </Modal>
      </div>
    );
  }
}

export default Reviews;
