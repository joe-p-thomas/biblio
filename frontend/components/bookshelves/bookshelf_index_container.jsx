import { connect } from 'react-redux';
import BookshelfIndex from './bookshelf_index';
import { requestBookshelves } from '../../actions/bookshelf_actions';
import { requestUsersBooks } from '../../actions/book_actions';

const mapStateToProps = (state) => ({
  bookshelves: Object.keys(state.bookshelves).map(id => state.bookshelves[id]),
  books: state.books
});

const mapDispatchToProps = (dispatch) => ({
  requestBookshelves: () => dispatch(requestBookshelves()),
  requestUsersBooks: () => dispatch(requestUsersBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
