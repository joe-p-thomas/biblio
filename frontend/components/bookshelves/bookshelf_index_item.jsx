import React from 'react';

class BookshelfIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>{this.props.bookshelf.title}</h5>
      </div>
    );
  }
}

export default BookshelfIndexItem;
