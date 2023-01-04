import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo-splash.svg';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SplashPageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 82px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 60px);
`;

export const LogoImg = styled.div`
  display: inline-block;
  background: url(${logo});
  width: 218px;
  height: 275px;
  animation: ${fadeInOut} 0.5s linear forwards;
`;
