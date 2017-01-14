import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import SessionContainer from './session/session_container';
import SearchBarContainer from './search/search_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
  }

  toggleModal(formType) {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  redirect(path) {
    this.props.router.push(path);
  }

  render() {
    let bookshelfButton = (
      <button onClick={() => this.props.router.push('/bookshelves')}>
        Bookshelves
      </button>
    );

    return (
      <div className="nav">
        <div className="left-nav">
            <h1 className='logo'
                onClick={() => this.props.router.push('/')}>
              Biblio
            </h1>
            {bookshelfButton}
        </div>

        <SearchBarContainer/>

        <SessionContainer />
      </div>
    );
  }

}

export default withRouter(Header);
