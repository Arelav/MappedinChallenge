import React, {Component} from 'react';
import {Container} from './appStyles.js';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const url = `https://api.github.com/users/axiomaticdesign/starred`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({data}))
  }

  render() {
    const {data} = this.state;

    return (
      <Container>
        <h1>
          Starred repos for <span>axiomaticdesign</span>
        </h1>
        <Card/>
        <div>
          {data.map(repo => <div key={repo.id}>{repo.name}</div>)}
        </div>
      </Container>
    );
  }
}

export default App;
