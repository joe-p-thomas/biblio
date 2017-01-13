import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BookReducer from './book_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BookReducer
});

export default RootReducer;
