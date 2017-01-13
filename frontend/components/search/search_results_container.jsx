import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  books: Object.keys(state.books).map(id => state.books[id])
});

export default connect(mapStateToProps)(SearchResults);
