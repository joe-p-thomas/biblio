import React from 'react';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='book-index-item'>
        <img src={`http://res.cloudinary.com/biblio/image/upload/w_90/${this.props.book.image_url}`}>
        </img>
        <div>
          <h4>{this.props.book.title}</h4>
          <h6>{this.props.book.author}</h6>
        </div>
      </div>
    );
  }
}

export default BookIndexItem;
