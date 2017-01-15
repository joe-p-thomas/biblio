import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';

const BookDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.book;
    default:
      return state;
  }
};
 export default BookDetailReducer;
