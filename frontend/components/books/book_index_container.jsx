import { connect } from 'react-redux';
import BookIndex from './book_index';
import { requestBookDetail } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  books: ownProps.books,
  title: ownProps.title
});

const mapDispatchToProps = (dispatch) => ({
  requestBookDetail: (book) => dispatch(requestBookDetail(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
