import React from 'react';
import AuthFormContainer from './auth_form_container';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className='auth-loggedin'>
          <p>{`${this.props.currentUser.firstName}
                ${this.props.currentUser.lastName}`}</p>
          <button onClick={this.props.requestLogout}>log out</button>
        </div>
      );
    } else {
      return(
        <AuthFormContainer />
      );
    }
  }
}

export default Session;
