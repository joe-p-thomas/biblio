import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestBooksByParams } from '../../actions/book_actions';

const mapDispatchToProps = (dispatch) => ({
  search: (params) => dispatch(requestBooksByParams(params))
});

export default connect(null, mapDispatchToProps)(SearchBar);
