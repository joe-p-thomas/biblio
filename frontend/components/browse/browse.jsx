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
      <div className='browse'>
        <BookIndexContainer books={this.props.books}
                            title='Browse All Books'/>
      </div>
    );
  }
}

export default Browse;
