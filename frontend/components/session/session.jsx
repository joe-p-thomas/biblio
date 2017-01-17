import React from 'react';
import { withRouter } from 'react-router';
import AuthFormContainer from './auth_form_container';

class Session extends React.Component {
  constructor(props) {
    super(props);

    this.requestLogout = this.requestLogout.bind(this);
  }

  requestLogout(e) {
    e.preventDefault();
    this.props.requestLogout().then(
      () => this.props.router.push('/')
    );
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className='auth-loggedin'>
          <p>{`${this.props.currentUser.firstName}
                ${this.props.currentUser.lastName}`}</p>
          <button onClick={this.requestLogout}>log out</button>
        </div>
      );
    } else {
      return(
        <AuthFormContainer />
      );
    }
  }
}

export default withRouter(Session);
