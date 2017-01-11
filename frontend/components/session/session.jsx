import React from 'react';
import AuthFormContainer from './auth_form_container';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h3>{`${this.props.currentUser.firstName}
                ${this.props.currentUser.lastName}`}</h3>
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
