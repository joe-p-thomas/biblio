import { connect } from 'react-redux';
import NewBook from './new_book';
import { createBook } from'../../actions/book_actions';

const mapStateToProps = (state) => ({
  errors: state.formErrors,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);
