import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { requestLogin,
         requestSignup,
         receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(receiveErrors([])),
  requestLogin: (user) => dispatch(requestLogin(user)),
  requestSignup: (user) => dispatch(requestSignup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
