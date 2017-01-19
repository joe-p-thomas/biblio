import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const BookDetailReducer = (state = {}, action) => {
  let newBook;
  switch (action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.book;
    case RECEIVE_REVIEW:
      newBook = merge({}, state);
      newBook = merge(newBook, {review: Object.values(action.review)[0]});
      return newBook;
    case REMOVE_REVIEW:
       newBook = merge({}, state);
       newBook = merge(newBook, {review: null});
       return newBook;
    default:
      return state;
  }
};
 export default BookDetailReducer;
