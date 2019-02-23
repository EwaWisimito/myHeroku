import React, { Component } from 'react';
import UsersContainer from './usersContainer'
import Form from './Form'


class App extends Component {
  render() {
    return (
      <div >
        <Form />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
