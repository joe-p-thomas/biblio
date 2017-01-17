import * as apiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';

export const recevieReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const recevieReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveFormErrors = (errors) => ({
  type: RECEIVE_FORM_ERRORS,
  errors
});

export const requestReviews = (bookId) => (dispatch) => (
  apiUtil.fetchReviews(bookId).then(
    res => dispatch(recevieReviews(res))
  )
);

export const createReview = (review) => (dispatch) => (
  apiUtil.createReview(review).then(
    res => {
      dispatch(recevieReview(res));
      dispatch(receiveFormErrors([]));
      return res;
    },
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);

export const updateReview = (review) => (dispatch) => (
  apiUtil.updateReview(review).then(
    res => {
      dispatch(recevieReview(res));
      dispatch(receiveFormErrors([]));
      return res;
    },
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);

export const deleteReview = (review) => (dispatch) => (
  apiUtil.deleteReview(review).then(
    res => dispatch(removeReview(review))
  )
);
