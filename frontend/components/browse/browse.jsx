import React from 'react';
import BookIndexContainer from '../books/book_index_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestBooks();
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    return(
      <BookIndexContainer books={this.props.books} />
    );
  }
}

export default Browse;
