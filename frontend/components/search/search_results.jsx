import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BookIndexContainer books={this.props.books}
                          title='Search Results'/>
    );
  }
}

export default SearchResults;
