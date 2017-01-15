import { connect } from 'react-redux';
import BookshelfIndex from './bookshelf_index';
import { requestBookshelves,
         createBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';
import { requestUsersBooks } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  bookshelves: Object.keys(state.bookshelves).map(id => state.bookshelves[id]),
  books: state.books,
  errors: state.formErrors
});

const mapDispatchToProps = (dispatch) => ({
  requestBookshelves: () => dispatch(requestBookshelves()),
  createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
  deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf)),
  requestUsersBooks: () => dispatch(requestUsersBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
