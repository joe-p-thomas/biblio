import { connect } from 'react-redux';
import NewBook from './new_book';
import { updateBook } from'../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.formErrors,
  book: state.bookDetail,
  method: 'Update Book'
});

const mapDispatchToProps = (dispatch) => ({
  action: (book) => dispatch(updateBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);
