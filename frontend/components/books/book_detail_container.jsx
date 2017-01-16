import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { requestBookDetail } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
  book: state.bookDetail,
  url_id: ownProps.params.id,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestBookDetail: (book) => dispatch(requestBookDetail(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
