import React, {Component} from 'react'
import {YellowFa, Repo, Title, Link, Counters, Counter, CounterIcon, CounterLink} from './cardSyles';

class Card extends Component {
  render() {
    const {repo} = this.props;

    return (
      <Repo key={repo.id}>
        <Title>
          <YellowFa name='star'/>
          <Link href={repo.html_url}>{repo.full_name}</Link>
        </Title>
        <p>{repo.description}</p>
        <Counters>
          <Counter>
            <CounterIcon name='star'/>
            <CounterLink href={repo.stargazers_url}>{repo.stargazers_count}</CounterLink>
          </Counter>
          <Counter>
            <CounterIcon name='code-fork'/>
            <CounterLink href={repo.forks_url}>{repo.forks_count}</CounterLink>
          </Counter>
        </Counters>
      </Repo>
    )
  }
}

export default Card;

