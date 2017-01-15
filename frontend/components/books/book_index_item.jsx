import React from 'react';
import { withRouter } from 'react-router';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.requestDetail(this.props.book).then(
      this.props.router.push(`/book-detail/${this.props.book.id}`)
    );
  }

  render() {
    return(
      <div className='book-index-item' onClick={this.handleClick}>
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

export default withRouter(BookIndexItem);
