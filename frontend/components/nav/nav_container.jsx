import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Nav);
