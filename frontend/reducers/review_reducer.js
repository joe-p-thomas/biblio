import { merge } from 'lodash';

import { RECEIVE_REVIEWS,
         RECEIVE_REVIEW,
         REMOVE_REVIEW } from '../actions/review_actions';

const ReviewReducer = (state = {}, action) => {
  let newState;
  switch( action.type ) {
    case RECEIVE_REVIEWS:
     return action.reviews;
    case RECEIVE_REVIEW:
       newState = merge({}, state, action.review);
      return newState;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default ReviewReducer;
