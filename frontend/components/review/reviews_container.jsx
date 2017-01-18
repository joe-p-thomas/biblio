import { connect } from 'react-redux';
import Reviews from './reviews';
import { createReview,
         updateReview,
         deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  bookId: state.bookDetail.id,
  reviews: state.reviews,
  usersReview:  state.bookDetail.review,
  currentUser: state.session.currentUser,
  errors: state.formErrors
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
