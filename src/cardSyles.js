import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const YellowFa = styled(FontAwesome)`
  color: #ffc500;
  margin-right: 7px;
`;

const Repo = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Link = styled.a`
  color: #007afb;
`;

const Counters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Counter = styled.div`
  margin-right: 20px;
`;

const CounterIcon = styled(FontAwesome)`
  color: #333;
  margin-right: 5px;
  font-size: 1.25em;
`;

const CounterLink = styled.a`
  &:link,
  &:visited {
    color: #777;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #ff5600;
  }
`;

export {YellowFa, Repo, Title, Link, Counters, Counter, CounterIcon, CounterLink};
