import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBookDetail } from '../../actions/book_actions';
import { updateBookshelf } from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => ({
  book: state.bookDetail,
  url_id: ownProps.params.id,
  currentUser: state.session.currentUser,
  bookshelves: state.bookshelves
});

const mapDispatchToProps = (dispatch) => ({
  requestBookDetail: (book) => dispatch(requestBookDetail(book)),
  updateBookshelf: (bookshelf) =>  dispatch(updateBookshelf(bookshelf))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
