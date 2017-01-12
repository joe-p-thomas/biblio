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
      <div className="nav">
        <div className='logo'>
            <h1>Biblio</h1>
        </div>

        <p>SearchBarComponent Place Holder</p>

        <SessionContainer />
      </div>
    );
  }

}

export default Header;
