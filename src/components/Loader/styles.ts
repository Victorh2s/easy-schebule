import { keyframes } from 'styled-components';
import styled from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${(props) => props.theme.Light.button};
  border-top-color: ${(props) => props.theme.Light['font-color']};
  border-radius: 50%;
  animation: ${spinAnimation} 1s infinite linear;
`;
