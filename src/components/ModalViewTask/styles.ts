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

interface ModalContentProps {
  status: string;
  isLoading: boolean;
}

export const ModalContent = styled.div<ModalContentProps>`
  background-color: ${(props) => props.theme.Light['background-form']};
  width: 80%;
  height: 80%;
  padding: 4rem;
  border-radius: 5px;
  animation: ${fadeIn} 0.2s ease-in-out;
  display: flex;
  align-items: ${(props) => (props.isLoading ? 'center' : 'start')};
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  h2 {
    width: 100%;
    margin-bottom: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
  }

  p {
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
  }

  strong {
    width: 100%;
    color: ${(props) =>
      props.status === 'Pendente'
        ? props.theme.Light['pendente-color']
        : props.status === 'Fazendo'
        ? props.theme.Light['fazendo-color']
        : props.theme.Light.success};
    margin-bottom: 2rem;
  }

  span {
    width: 100%;
    color: ${(props) => props.theme.Light.gray};
    font-style: italic;
  }

  .closeButton {
    position: absolute;
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
      background: ${(props) => props.theme.Light['pendente-color']};
      cursor: not-allowed;
    }
    &:hover {
      background: ${(props) => props.theme.Light['pendente-color']};
    }
  }
`;
