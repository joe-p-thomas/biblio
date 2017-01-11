import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {this.props.children}
        <h3>App</h3>
      </div>
    );
  }
}

export default App;
