import React from 'react';

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
    this.props.search(this.state.params);
  }

  render() {
    return(
      <form>
        <input type='text'
               value={this.state.params}
               onChange={this.handleInput}
               placeholder='Search'>
        </input>
        <button onClick={this.handleSubmit}></button>
      </form>
    );
  }
}

export default SearchBar;
