import React from 'react';
import Modal from 'react-modal';
import modalStyle from './modal_style';
import { merge } from 'lodash';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        username: '',
        password: ''
      },
      formType: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(formType) {
    this.setState({formType});
  }

  handleInput(e) {
    const newUser = merge(this.state.user,{[e.target.name]: e.target.value});
    this.setState({user: newUser});

  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formType === 'new') {
      this.props.requestSignup(this.state.user);
    } else {
      this.props.requestLogin(this.state.user);
    }
  }

  closeModal() {
    this.setState({formType: null});
  }

  render() {
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));
    const text = (this.state.formType === 'new') ? 'Sign up' : 'Log in';
    const altText = (this.state.formType === 'new') ? 'Log in' : 'Sign up';
    const altForm = (this.state.formType === 'new') ? 'old' : 'new';
    let _newUserForm = [];
    if (this.state.formType === 'new') {
      _newUserForm = [<input type='text'
                             name='first_name'
                             onChange={this.handleInput}
                             value={this.state.user.first_name}
                             placeholder={'first name'}
                             key={'first_name'}>
                      </input>,

                      <input type='text'
                             name='last_name'
                             onChange={this.handleInput}
                             value={this.state.user.last_name}
                             placeholder={'last name'}
                             key={'last_name'}>
                      </input>];
    }

    return(
      <div>
        <button onClick={() => this.handleClick('old')}>Log in</button>
        <button onClick={() => this.handleClick('new')}>Sign Up</button>

        <Modal isOpen={!!this.state.formType}
               onRequestClose={this.closeModal}
               style={modalStyle}
               contentLabel='Modal'>
          <h4>{text}</h4>
          <h2>{errors}</h2>
          <form onSubmit={this.handleSubmit}>
            {_newUserForm}
            <input type='text'
                   name='username'
                   onChange={this.handleInput}
                   value={this.state.user.username}
                   placeholder={'username'}>
            </input>

            <input type='password'
                   name='password'
                   onChange={this.handleInput}
                   value={this.state.user.password}
                   placeholder={'passoword'}>
            </input>

            <input type='submit' value={text}></input>
          </form>
          <br></br>
          <p>or</p>
          <button onClick={() => this.handleClick(altForm)}>
            {altText}
          </button>
        </Modal>
      </div>
    );
  }
}

export default AuthForm;
