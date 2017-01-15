import React from 'react';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestBookDetail({id: this.props.url_id});
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    return (
      <div className='book-detail-container'>
        <div className='book-detail'>
          <img src={`http://res.cloudinary.com/biblio/image/upload/w_200/${this.props.book.image_url}`}>
          </img>
          <div>
            <h2>{this.props.book.title}</h2>
            <h4>{this.props.book.author}</h4>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
