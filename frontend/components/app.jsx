import React from 'react';

import Header from './header';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {

    return(
      <div>
        <Header/>
        <div className='body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
