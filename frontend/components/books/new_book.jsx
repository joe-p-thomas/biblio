import React from 'react';

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      image_url: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className='new-book'>
        <h2>Create a new book</h2>
        <form>
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.title}
                 placeholder='Title'
                 name='title'></input>
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.author}
                 placeholder='Author'
                 name='title'></input>
          <textarea onChange={this.handleInput}
                    placeholder='Description'
                    name='title'>{this.props.description}</textarea>


          <button onClick={this.handleSubmit}>Submit Book</button>
        </form>
      </div>
    );
  }
}

export default NewBook;
