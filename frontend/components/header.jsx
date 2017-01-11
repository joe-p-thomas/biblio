import React from 'react';
import Modal from 'react-modal';
import SessionContainer from './session/session_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  toggleModal(formType) {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div className="header">
        <h3>biblio</h3>
        <SessionContainer />
      </div>
    );
  }

}

export default Header;
