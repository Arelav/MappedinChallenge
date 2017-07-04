import React, { Component } from 'react';
import logo from './logo.svg';
import {Container, AppLogo, AppHeader, AppIntro} from './appStyles.js';

class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </Container>
    );
  }
}

export default App;
