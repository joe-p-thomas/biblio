import React from 'react';
import { withRouter } from 'react-router';

import SessionContainer from './session/session_container';
import SearchBarContainer from './search/search_bar_container';
import NavContainer from './nav/nav_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownNav: false,
      dropDownSession: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleSession = this.toggleSession.bind(this);
  }

  toggleNav() {
    this.setState({
      dropDownNav: !this.state.dropDownNav
    });
  }

  toggleSession() {
    this.setState({
      dropDownSession: !this.state.dropDownSession
    });
  }

  render() {
    let dropDownNavButtons = '';
    if (this.state.dropDownNav) {
      dropDownNavButtons = (
        <div className="drop-down-nav-buttons">
          <NavContainer />
        </div>
      );
    }

    let dropDownSessionButtons = '';
    if (this.state.dropDownSession) {
      dropDownSessionButtons = (
        <div className="drop-down-session-buttons">
          <SessionContainer />
        </div>
      );
    }

    return (
      <div className="nav">
        <div className="drop-down-menu-button" onClick={this.toggleNav}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        {dropDownNavButtons}
        <div className="left-nav">
            <h1 className='logo' onClick={() => this.props.router.push('/')}>
              Biblio
            </h1>
            <NavContainer />
        </div>

        <SearchBarContainer/>

        <div className="drop-down-session-menu" onClick={this.toggleSession}>
          <i className="fa fa-user-o" aria-hidden="true"></i>
        </div>
        {dropDownSessionButtons}
        <div className="session-container">
          <SessionContainer />
        </div>
      </div>
    );
  }

}

export default withRouter(Header);
