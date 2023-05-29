import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.Light['background-form']};
  width: 50%;
  height: 35%;
  padding: 4rem;
  border-radius: 5px;
  animation: ${fadeIn} 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  h2 {
    width: 100%;
    text-align: center;
  }

  div {
    button:first-child {
      &:hover {
        background: ${(props) => props.theme.Light['success']};
      }
    }
    button {
      border-radius: 0.2rem;
      border: none;
      top: 0;
      right: 0;
      padding: 0.5rem;
      cursor: pointer;
      background: ${(props) => props.theme.Light['button']};
      color: ${(props) => props.theme.Light['font-color']};
      font-weight: bold;
      margin-top: 1rem;
      margin-right: 1rem;
      transition: all 0.2s ease-in-out;

      &:disabled {
        background: ${(props) => props.theme.Light['gray']} !important;
        cursor: not-allowed;
      }
      &:hover {
        background: ${(props) => props.theme.Light['pendente-color']};
      }
    }
  }
`;
