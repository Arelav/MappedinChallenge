import styled, {keyframes} from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

export {Container, AppLogo, AppHeader, AppIntro};
