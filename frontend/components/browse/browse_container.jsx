import { connect } from 'react-redux';
import { requestBooks } from '../../actions/book_actions';
import Browse from './browse';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  books: Object.keys(state.books).map(id => state.books[id])
});

const mapDispatchToProps = (dispatch) => ({
  requestBooks: () => dispatch(requestBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
