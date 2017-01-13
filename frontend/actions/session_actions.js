import * as apiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestLogin = (user) => (dispatch) => (
  apiUtils.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestLogout = () => (dispatch) => (
  apiUtils.logout().then(
    res => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const requestSignup = (user) => (dispatch) => (
  apiUtils.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
