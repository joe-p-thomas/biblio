import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { requestLogin,
         requestSignup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (user) => dispatch(requestLogin(user)),
  requestSignup: (user) => dispatch(requestSignup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
