import React from 'react';
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';
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
      this.state.review.id = this.props.usersReview.id;
      this.state.review = this.props.usersReview;
      this.state.review.body = this.state.review.body || '';
    }
    
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.usersReview !== nextProps.usersReview &&
         nextProps.usersReview) {
      this.setState({review: nextProps.usersReview});
    }
  }

  handleBodyInput(e) {
    const review =
      merge({}, this.state.review, {body: e.target.value});
    this.setState({review});
  }

  handleRatingInput(rating) {
    const review =
      merge({}, this.state.review, {rating});
    this.setState({review});
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.props.usersReview ) {
      this.props.updateReview(this.state.review)
        .then(() => this.setState({modalOpen: false}));
    } else {
      this.props.createReview(this.state.review)
        .then(() => this.setState({modalOpen: false}));
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.usersReview)
      .then(() => this.setState({
        modalOpen: false,
        review: {
          book_id: this.props.bookId,
          rating: null,
          body: ''
        }
      }));
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

    let deleteButton = '';
    if ( this.props.usersReview ) {
      deleteButton = (
        <button onClick={this.handleDelete}>
          Delete Review
        </button>
      );
    }

    const reviewList = (
      Object.values(this.props.reviews).map((review) => (
        <li className='review-item'
            key={review.id}>
          <h4>{review.userName}</h4>
            <StarRatingComponent
               name="rating"
               starCount={5}
               value={review.rating}
               starColor={'#e6994c'}
               emptyStarColor={'#ccc'}
               editing={false}/>
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
                <h3>Review this Book</h3>
                <div>
                  <h5>Rating:</h5>
                  <StarRatingComponent
                     name="rating"
                     starCount={5}
                     value={this.state.review.rating}
                     onStarClick={this.handleRatingInput}
                     starColor={'#e6994c'}
                     emptyStarColor={'#ccc'}/>
                 </div>

                <div>
                  <h5>Review:</h5>
                  <textarea onChange={this.handleBodyInput}
                    name='body'
                    value={this.state.review.body}></textarea>
                </div>

                <button onClick={this.handleSubmit}>Submit</button>
                {deleteButton}
              </form>
        </Modal>
      </div>
    );
  }
}

export default Reviews;
