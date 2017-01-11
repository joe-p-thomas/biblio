import { connect } from 'react-redux';
import Session from './session';
import { requestLogout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestLogout: () => dispatch(requestLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
