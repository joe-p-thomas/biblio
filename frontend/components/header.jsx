import React from 'react';
import { withRouter } from 'react-router';

import SessionContainer from './session/session_container';
import SearchBarContainer from './search/search_bar_container';
import NavContainer from './nav/nav_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div className="nav">
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
