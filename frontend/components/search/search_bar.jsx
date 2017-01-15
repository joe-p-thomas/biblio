import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({params: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.params).then(() => {
      this.props.router.push('/search');
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text'
               value={this.state.params}
               onChange={this.handleInput}
               placeholder='Search'
               className='search-bar'>
        </input>
      </form>
    );
  }
}

export default withRouter(SearchBar);
