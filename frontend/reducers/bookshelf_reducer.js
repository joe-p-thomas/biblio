import { merge } from 'lodash';
import { RECEIVE_BOOKSHELVES,
         RECEIVE_BOOKSHELF,
         REMOVE_BOOKSHELF} from '../actions/bookshelf_actions';


const BookshelfReducer = (state = {}, action ) => {
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      newState = merge({}, state, action.bookshelf);
      return newState;
    case REMOVE_BOOKSHELF:
      newState = merge({}, state);
      newState.delete(action.bookshelf);
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
