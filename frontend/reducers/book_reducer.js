import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK }
  from '../actions/book_actions';
import { merge } from 'lodash';

const BookReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      newState = merge({}, state, action.book);
      return newState;
    case REMOVE_BOOK:
      newState = merge({}, state);
      newState.delete(action.book);
      return newState;
    default:
      return state;
  }
};

export default BookReducer;
