import React from 'react';
import { withRouter } from 'react-router';

import SessionContainer from './session/session_container';
import SearchBarContainer from './search/search_bar_container';
import NavContainer from './nav/nav_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownNav: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      dropDownNav: !this.state.dropDownNav
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

        <SessionContainer />
      </div>
    );
  }

}

export default withRouter(Header);
