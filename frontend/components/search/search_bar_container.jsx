import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => ({
  search: (params) => dispatch()
});

export default connect(mapDispatchToProps)(SearchBar);
