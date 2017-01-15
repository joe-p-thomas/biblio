import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BookReducer from './book_reducer';
import BookshelfReducer from './bookshelf_reducer';
import FormErrorReducer from './form_error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BookReducer,
  bookshelves: BookshelfReducer,
  formErrors: FormErrorReducer
});

export default RootReducer;
