import React, {Component} from 'react';
import {Container, Title} from './appStyles.js';
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
        <Title>
          Starred repos for <span>axiomaticdesign</span>
        </Title>

        <div>
          {data.map(repo => <Card repo={repo}/>)}
        </div>
      </Container>
    );
  }
}

export default App;
