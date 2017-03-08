import { connect } from 'react-redux';
import BookIndex from './book_index';
import { updateBookshelf } from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  books: ownProps.books,
  title: ownProps.title,
  bookshelf: ownProps.bookshelf
});

const mapDispatchToProps = (dispatch) => ({
  updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
