import React from 'react';
import { withRouter } from 'react-router';
class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      image_url: ''
    };
    if ( props.book ) {
      this.state = {
        id: props.book.id,
        title: props.book.title,
        author: props.book.author,
        description: props.book.description,
        image_url: props.book.image_url
      };
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openCloudinary = this.openCloudinary.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      (res) => {
        let id = Object.values(res)[0].id;
        this.props.router.push(`/book-detail/${id}`);
      }
    );
  }

  openCloudinary(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (err, res) => {
        if ( err === null ) {
          this.setState({image_url: res[0].public_id});
        }
      }
    );
  }

  render() {
    const heading = (this.props.method === 'Update Book') ?
      'Edit existing book' : 'Create a new book';

    const errors = this.props.errors.map((err, idx) => (
      <li key={idx}>-{err}</li>
    ));

    let uploadedImage;
    let imgButtonText;
    if ( this.state.image_url === '') {
      uploadedImage = '';
      imgButtonText = 'Add Book Cover';
    } else {
      uploadedImage = (
        <img src={`http://res.cloudinary.com/biblio/image/upload/w_200/${this.state.image_url}`}/>
      );
      imgButtonText = 'Change Book Cover';
    }

    return(
      <div className='new-book'>
        <h2>{heading}</h2>
        <ul>
          {errors}
        </ul>
        <form className='new-book-form'>
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.title}
                 placeholder='Title'
                 name='title'></input>
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.author}
                 placeholder='Author'
                 name='author'></input>
          <textarea onChange={this.handleInput}
                    placeholder='Description'
                    name='description'
                    value={this.state.description}></textarea>
          {uploadedImage}
          <button onClick={this.openCloudinary}>{imgButtonText}</button>
          <button onClick={this.handleSubmit}>{this.props.method}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewBook);
